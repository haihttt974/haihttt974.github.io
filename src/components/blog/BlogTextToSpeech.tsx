import { useEffect, useMemo, useRef, useState } from "react";
import { Headphones, Pause, Play, SkipBack, SkipForward, Square, Volume2, Wand2, X } from "lucide-react";
import { ArticleSpeechSegment } from "@/lib/articleSpeech";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface BlogTextToSpeechProps {
  activeIndex: number | undefined;
  language: "vi" | "en";
  onActiveIndexChange: (index: number | undefined) => void;
  onEnabledChange: (enabled: boolean) => void;
  onSelectIndex: (index: number | undefined) => void;
  playRequest?: { index: number; nonce: number };
  selectedIndex: number | undefined;
  segments: ArticleSpeechSegment[];
  speechEnabled: boolean;
}

type SpeechLang = "vi" | "en";

const getSpeechLanguage = (language: SpeechLang) => (language === "vi" ? "vi-VN" : "en-US");
const vietnameseAsciiWords = new Set([
  "anh", "ban", "bang", "bi", "bo", "cac", "cach", "can", "cau", "cho", "co", "con", "cua", "cung", "da", "dang",
  "de", "den", "di", "do", "duoc", "gi", "giua", "hay", "hon", "khi", "khong", "la", "lai", "lam", "len", "luc", "ma",
  "mot", "muon", "nay", "nen", "neu", "nguoi", "nhieu", "nhung", "noi", "o", "phai", "qua", "ra", "rang", "roi",
  "sau", "se", "tai", "tao", "thi", "them", "theo", "toi", "trong", "tu", "va", "van", "vao", "ve", "voi",
]);

const englishPronunciations: Record<string, string> = {
  api: "ây pi ai",
  ui: "iu ai",
  ux: "iu ích",
  sql: "ét kiu eo",
  html: "hát ti em eo",
  css: "si ét ét",
  js: "giây ét",
  json: "giây sần",
  xml: "ích em eo",
  http: "hát ti ti pi",
  https: "hát ti ti pi ét",
  url: "iu a eo",
  uri: "iu a ai",
  rest: "rést",
  crud: "cờ rát",
  jwt: "giây đáp liu ti",
  oauth: "âu óth",
  cors: "coóc",
  orm: "âu a em",
  npm: "en pi em",
  node: "nốt",
  nodejs: "nốt giây ét",
  react: "ri áct",
  vue: "viu",
  angular: "ăng ghiu lờ",
  next: "néxt",
  nextjs: "néxt giây ét",
  javascript: "gia va script",
  typescript: "thai sờ script",
  frontend: "front end",
  backend: "back end",
  fullstack: "full stack",
  framework: "frame work",
  component: "com pô nần",
  hook: "húc",
  hooks: "húc",
  state: "stây",
  props: "próp",
  router: "rao tờ",
  routing: "rao ting",
  cache: "két",
  server: "sơ vờ",
  client: "clai ần",
  database: "đây ta bêis",
  docker: "đóc cơ",
  kubernetes: "ku bờ nét tìs",
  github: "gít hấp",
  git: "gít",
  agile: "a giai",
  scrum: "sờ cờ ram",
};

const normalizeEnglishKey = (value: string) => value.toLowerCase().replace(/[^a-z0-9+#]/g, "");

const spellAcronymForVietnamese = (value: string) => {
  const letterNames: Record<string, string> = {
    a: "ây", b: "bi", c: "si", d: "đi", e: "i", f: "ép", g: "gi", h: "hát", i: "ai", j: "giây",
    k: "kây", l: "eo", m: "em", n: "en", o: "âu", p: "pi", q: "kiu", r: "a", s: "ét", t: "ti",
    u: "iu", v: "vi", w: "đáp liu", x: "ích", y: "wai", z: "di",
  };

  return value.toLowerCase().split("").map((char) => letterNames[char] ?? char).join(" ");
};

const pronounceEnglishTokenForVietnamese = (token: string) => {
  const clean = token.replace(/^['"([{]+|['")\]}.,:;!?]+$/g, "");
  const key = normalizeEnglishKey(clean);
  if (!key) return token;

  const mapped = englishPronunciations[key];
  if (mapped) return token.replace(clean, mapped);
  if (/^[A-Z]{2,5}$/.test(clean)) return token.replace(clean, spellAcronymForVietnamese(clean));

  return token;
};

const smoothVietnameseSpeechText = (text: string) =>
  text.replace(/[A-Za-z][A-Za-z0-9+#./-]*/g, (token) => {
    const clean = token.replace(/^['"([{]+|['")\]}.,:;!?]+$/g, "");
    if (!isEnglishToken(clean, "vi")) return token;
    return pronounceEnglishTokenForVietnamese(token);
  });

const getKindLabel = (kind: ArticleSpeechSegment["kind"], language: "vi" | "en") => {
  if (language === "vi") {
    return { heading: "Tiêu đề", paragraph: "Đoạn", list: "Danh sách", quote: "Trích dẫn" }[kind];
  }
  return { heading: "Heading", paragraph: "Paragraph", list: "List", quote: "Quote" }[kind];
};

const getPreferredVoice = (voices: SpeechSynthesisVoice[], language: SpeechLang) => {
  const targetLanguage = getSpeechLanguage(language).toLowerCase();
  const exact = voices.filter((voice) => voice.lang.toLowerCase() === targetLanguage);
  if (exact.length > 0) {
    return exact.find((voice) => /vietnam|việt|english|google|microsoft/i.test(voice.name)) ?? exact[0];
  }
  const prefix = targetLanguage.split("-")[0];
  return voices.find((voice) => voice.lang.toLowerCase().startsWith(prefix));
};

const useSpeechVoices = (supported: boolean) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (!supported) return;
    const loadVoices = () => setVoices(window.speechSynthesis.getVoices());
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
  }, [supported]);

  return voices;
};

const isEnglishToken = (token: string, baseLanguage: "vi" | "en") => {
  if (baseLanguage === "en") return true;
  const clean = token.replace(/^['"([{]+|['")\]}.,:;!?]+$/g, "");
  if (!/^[A-Za-z][A-Za-z0-9+#./-]*$/.test(clean)) return false;
  if (vietnameseAsciiWords.has(clean.toLowerCase())) return false;
  return /[A-Z]/.test(clean) || /[0-9+#./-]/.test(clean) || clean.length > 3;
};

const splitMixedLanguageText = (text: string, baseLanguage: "vi" | "en") => {
  const tokens = text.match(/[A-Za-z][A-Za-z0-9+#./-]*|[^A-Za-z]+/g) ?? [text];
  const chunks: Array<{ lang: SpeechLang; text: string }> = [];

  tokens.forEach((token) => {
    const lang: SpeechLang = isEnglishToken(token, baseLanguage) ? "en" : baseLanguage;
    const previous = chunks[chunks.length - 1];
    if (previous?.lang === lang) {
      previous.text += token;
    } else {
      chunks.push({ lang, text: token });
    }
  });

  return chunks.map((chunk) => ({ ...chunk, text: chunk.text.trim() })).filter((chunk) => chunk.text.length > 0);
};

export const BlogTextToSpeech = ({
  activeIndex,
  language,
  onActiveIndexChange,
  onEnabledChange,
  onSelectIndex,
  playRequest,
  selectedIndex,
  segments,
  speechEnabled,
}: BlogTextToSpeechProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rate, setRate] = useState(1);
  const currentRunRef = useRef(0);
  const requestedStopRef = useRef(false);

  const supported = typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  const voices = useSpeechVoices(supported);
  const viVoice = useMemo(() => getPreferredVoice(voices, "vi"), [voices]);
  const enVoice = useMemo(() => getPreferredVoice(voices, "en"), [voices]);
  const baseVoice = language === "vi" ? viVoice : enVoice;
  const hasMatchingVoice = language !== "vi" || viVoice?.lang.toLowerCase().startsWith("vi");

  const labels = useMemo(
    () => ({
      title: language === "vi" ? "Nghe bài viết" : "Listen to article",
      eyebrow: language === "vi" ? "Trình đọc" : "Reader",
      arm: language === "vi" ? "Chọn điểm đọc" : "Choose start point",
      armed: language === "vi" ? "Đang chọn điểm" : "Selecting start",
      close: language === "vi" ? "Tắt chọn điểm" : "Disable selection",
      inactive: language === "vi"
        ? "Chọn vị trí nghe trong bài."
        : "Choose where listening starts.",
      activeHint: language === "vi"
        ? "Chọn một thanh ngăn cách trong bài, rồi bấm Phát."
        : "Select a divider in the article, then press Play.",
      play: language === "vi" ? "Phát" : "Play",
      pause: language === "vi" ? "Tạm dừng" : "Pause",
      resume: language === "vi" ? "Tiếp tục" : "Resume",
      stop: language === "vi" ? "Dừng" : "Stop",
      previous: language === "vi" ? "Đoạn trước" : "Previous section",
      next: language === "vi" ? "Đoạn tiếp" : "Next section",
      rate: language === "vi" ? "Tốc độ" : "Speed",
      current: language === "vi" ? "Điểm đọc" : "Start point",
      noPoint: language === "vi" ? "Chưa chọn vị trí" : "No start point selected",
      unsupported: language === "vi" ? "Trình duyệt này chưa hỗ trợ đọc văn bản miễn phí." : "This browser does not support free text-to-speech.",
      missingVoice: language === "vi"
        ? "Chưa tìm thấy giọng vi-VN trong trình duyệt này. Hãy cài/cho phép giọng tiếng Việt để phát đúng tiếng Việt."
        : "No matching voice was found for this language.",
      provider: language === "vi" ? "TTS · tự chuyển giọng Việt/Anh" : "TTS · automatic VI/EN voice switching",
    }),
    [language],
  );

  useEffect(() => () => {
    if (supported) window.speechSynthesis.cancel();
  }, [supported]);

  const finishRun = (runId: number) => {
    if (currentRunRef.current !== runId) return;
    setIsPlaying(false);
    setIsPaused(false);
    onActiveIndexChange(undefined);
  };

  const speakSegmentParts = (runId: number, segmentIndex: number) => {
    if (currentRunRef.current !== runId) return;
    if (requestedStopRef.current || segmentIndex >= segments.length) {
      finishRun(runId);
      return;
    }

    onSelectIndex(segmentIndex);
    onActiveIndexChange(segmentIndex);

    const utterance = new SpeechSynthesisUtterance(
      language === "vi" ? smoothVietnameseSpeechText(segments[segmentIndex].text) : segments[segmentIndex].text,
    );
    utterance.lang = getSpeechLanguage(language);
    utterance.rate = rate;
    utterance.pitch = 1;
    const voice = language === "vi" ? viVoice : enVoice;
    if (voice) utterance.voice = voice;
    utterance.onend = () => {
      if (!requestedStopRef.current) speakSegmentParts(runId, segmentIndex + 1);
    };
    utterance.onerror = () => finishRun(runId);

    window.speechSynthesis.speak(utterance);
  };

  const speakFrom = (startIndex: number | undefined) => {
    if (!supported || segments.length === 0 || startIndex === undefined) return;

    const runId = currentRunRef.current + 1;
    currentRunRef.current = runId;
    requestedStopRef.current = false;
    window.speechSynthesis.cancel();
    onSelectIndex(startIndex);
    setIsPlaying(true);
    setIsPaused(false);
    speakSegmentParts(runId, startIndex);
  };

  useEffect(() => {
    if (!playRequest) return;
    onEnabledChange(true);
    speakFrom(playRequest.index);
  }, [playRequest?.nonce]);

  const stop = () => {
    if (!supported) return;
    requestedStopRef.current = true;
    currentRunRef.current += 1;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    onActiveIndexChange(undefined);
  };

  const pauseOrResume = () => {
    if (!supported) return;
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      return;
    }
    window.speechSynthesis.pause();
    setIsPaused(true);
  };

  const setEnabled = (enabled: boolean) => {
    onEnabledChange(enabled);
    if (!enabled) {
      stop();
      onSelectIndex(undefined);
    }
  };

  const jumpTo = (index: number) => {
    const nextIndex = Math.min(Math.max(index, 0), Math.max(segments.length - 1, 0));
    onSelectIndex(nextIndex);
    if (isPlaying) speakFrom(nextIndex);
  };

  if (segments.length === 0) return null;

  const selectedSegment = selectedIndex === undefined ? undefined : segments[selectedIndex];

  return (
    <section className="overflow-hidden rounded-xl border border-border/60 bg-card/80 shadow-sm backdrop-blur">
      <div className={cn("p-5", speechEnabled && "border-b border-border/60 bg-primary/[.035]")}>
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[.18em] text-primary">
              <Headphones className="h-4 w-4" />
              {labels.eyebrow}
            </p>
            <h2 className="flex items-center gap-2 text-lg font-semibold leading-6">
              <Volume2 className="h-5 w-5 text-primary" />
              {labels.title}
            </h2>
          </div>
          {speechEnabled && (
            <span className="shrink-0 rounded-full border border-primary/35 bg-primary/10 px-2.5 py-1 font-mono text-[10px] text-primary">
              {labels.armed}
            </span>
          )}
        </div>

        <Button
          type="button"
          variant={speechEnabled ? "outline" : "default"}
          className="w-full justify-center"
          onClick={() => setEnabled(!speechEnabled)}
        >
          {speechEnabled ? <X className="mr-2 h-4 w-4" /> : <Wand2 className="mr-2 h-4 w-4" />}
          {speechEnabled ? labels.close : labels.arm}
        </Button>
      </div>

      {speechEnabled && (
        <div className="space-y-5 p-5 animate-slide-up">
          <p className="text-sm leading-6 text-muted-foreground">{labels.activeHint}</p>

          {!supported ? (
            <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {labels.unsupported}
            </p>
          ) : (
            <>
              <div className="rounded-lg border border-border/70 bg-background/60 p-4">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[.16em] text-primary">{labels.current}</p>
                {selectedSegment ? (
                  <p className="line-clamp-3 text-sm font-medium leading-6">
                    {selectedIndex! + 1}. {getKindLabel(selectedSegment.kind, language)} - {selectedSegment.label}
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground">{labels.noPoint}</p>
                )}
              </div>

              {!hasMatchingVoice && (
                <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs leading-5 text-amber-700 dark:text-amber-300">
                  {labels.missingVoice}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-2">
                <Button type="button" variant="outline" size="icon" onClick={() => selectedIndex !== undefined && jumpTo(selectedIndex - 1)} disabled={selectedIndex === undefined || selectedIndex <= 0}>
                  <SkipBack className="h-4 w-4" />
                  <span className="sr-only">{labels.previous}</span>
                </Button>
                <Button type="button" onClick={() => (isPlaying ? pauseOrResume() : speakFrom(selectedIndex))} disabled={selectedIndex === undefined} className="min-w-[7.75rem] flex-1">
                  {isPlaying && !isPaused ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                  {isPlaying ? (isPaused ? labels.resume : labels.pause) : labels.play}
                </Button>
                <Button type="button" variant="outline" size="icon" onClick={stop} disabled={!isPlaying}>
                  <Square className="h-4 w-4" />
                  <span className="sr-only">{labels.stop}</span>
                </Button>
                <Button type="button" variant="outline" size="icon" onClick={() => selectedIndex !== undefined && jumpTo(selectedIndex + 1)} disabled={selectedIndex === undefined || selectedIndex >= segments.length - 1}>
                  <SkipForward className="h-4 w-4" />
                  <span className="sr-only">{labels.next}</span>
                </Button>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{labels.rate}</span>
                  <span className="font-mono">{rate.toFixed(1)}x</span>
                </div>
                <Slider value={[rate]} min={0.7} max={1.4} step={0.1} onValueChange={(value) => setRate(value[0] ?? 1)} />
              </div>

              <p className="border-t border-border/60 pt-4 text-xs leading-5 text-muted-foreground">
                {labels.provider}
                {baseVoice ? ` · ${baseVoice.name}` : ""}
              </p>
            </>
          )}
        </div>
      )}
    </section>
  );
};

