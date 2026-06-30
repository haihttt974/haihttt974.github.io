import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { copyToClipboard } from "@/lib/clipboard";
import { cn } from "@/lib/utils";

const languageAliases: Record<string, string> = {
  javascript: "js",
  jsx: "js",
  typescript: "ts",
  tsx: "ts",
  py: "python",
  cs: "csharp",
  "c#": "csharp",
};

const keywordGroups: Record<string, Set<string>> = {
  js: new Set([
    "async", "await", "break", "case", "catch", "class", "const", "continue", "default", "do", "else", "export",
    "extends", "finally", "for", "from", "function", "if", "import", "in", "instanceof", "let", "new", "of", "return",
    "switch", "throw", "try", "typeof", "var", "void", "while", "yield",
  ]),
  ts: new Set([
    "abstract", "as", "async", "await", "break", "case", "catch", "class", "const", "continue", "default", "do", "else",
    "enum", "export", "extends", "finally", "for", "from", "function", "if", "implements", "import", "in", "infer",
    "interface", "keyof", "let", "namespace", "new", "of", "private", "protected", "public", "readonly", "return",
    "satisfies", "switch", "throw", "try", "type", "typeof", "var", "void", "while",
  ]),
  python: new Set([
    "and", "as", "assert", "async", "await", "break", "class", "continue", "def", "del", "elif", "else", "except",
    "False", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "None", "nonlocal", "not",
    "or", "pass", "raise", "return", "True", "try", "while", "with", "yield",
  ]),
  csharp: new Set([
    "abstract", "async", "await", "base", "break", "case", "catch", "class", "const", "decimal", "default", "else",
    "enum", "false", "finally", "for", "foreach", "from", "get", "if", "in", "interface", "internal", "is", "namespace",
    "new", "null", "private", "protected", "public", "readonly", "record", "return", "sealed", "set", "static", "string",
    "switch", "this", "throw", "true", "try", "using", "var", "void", "when", "where",
  ]),
};

const literalTokens = new Set(["true", "false", "null", "undefined", "True", "False", "None"]);
const typeTokens = new Set([
  "Array", "Boolean", "Date", "Decimal", "Error", "Guid", "Iterable", "List", "Map", "Number", "Promise", "Record",
  "Set", "String", "Task", "ValueError", "dict", "list", "str", "int", "float", "bool",
]);

const normalizeLanguage = (language: string) => {
  const value = language.trim().toLowerCase();
  return languageAliases[value] ?? value;
};

const tokenPattern =
  /(\/\*[\s\S]*?\*\/|\/\/.*|#.*|`(?:\\.|[^`])*`|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|@[A-Za-z_]\w*|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b|=>|==={0,1}|!==?|\+\+|--|&&|\|\||[{}[\]().,;:<>+\-*/%=!?|&])/g;

const tokenizeCodeLine = (line: string) => {
  const tokens: string[] = [];
  let lastIndex = 0;

  line.replace(tokenPattern, (match, _token, offset: number) => {
    if (offset > lastIndex) tokens.push(line.slice(lastIndex, offset));
    tokens.push(match);
    lastIndex = offset + match.length;
    return match;
  });

  if (lastIndex < line.length) tokens.push(line.slice(lastIndex));
  return tokens;
};

const nextMeaningfulToken = (tokens: string[], startIndex: number) =>
  tokens.slice(startIndex + 1).find((token) => token.trim().length > 0);

const tokenClassName = (token: string, language: string, nextToken?: string) => {
  const normalized = normalizeLanguage(language);
  const keywords = keywordGroups[normalized] ?? keywordGroups.js;

  if (/^\s+$/.test(token)) return "";
  if (/^(\/\/|#|\/\*)/.test(token)) return "text-slate-500 italic";
  if (/^(`|"|')/.test(token)) return "text-emerald-300";
  if (/^@\w+/.test(token)) return "text-amber-300";
  if (/^\d/.test(token)) return "text-orange-300";
  if (literalTokens.has(token)) return "text-purple-300";
  if (keywords.has(token)) return "text-sky-300 font-medium";
  if (typeTokens.has(token) || /^[A-Z][A-Za-z0-9_]*$/.test(token)) return "text-cyan-200";
  if (nextToken === "(") return "text-yellow-200";
  if (/^[{}[\]().,;:<>+\-*/%=!?|&]+$/.test(token)) return "text-slate-300";

  return "text-slate-100";
};

const renderHighlightedLine = (line: string, language: string, lineIndex: number) => {
  const tokens = tokenizeCodeLine(line);

  return tokens.map((token, tokenIndex) => {
    const className = tokenClassName(token, language, nextMeaningfulToken(tokens, tokenIndex));

    return (
      <span key={`${lineIndex}-${tokenIndex}`} className={className || undefined}>
        {token}
      </span>
    );
  });
};

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const { language: currentLanguage } = useLanguage();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number>();
  const copyLabel = currentLanguage === "vi" ? "Sao chép mã" : "Copy code";
  const copiedLabel = currentLanguage === "vi" ? "Đã sao chép" : "Copied";
  const displayLanguage = language || "code";
  const codeLines = code.split("\n");

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const handleCopy = async () => {
    try {
      await copyToClipboard(code);
      setCopied(true);
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopied(false), 2000);
      toast({
        variant: "success",
        title: currentLanguage === "vi" ? "Đã sao chép mã" : "Code copied",
      });
    } catch (error) {
      console.error("Unable to copy code:", error);
      toast({
        variant: "destructive",
        title: currentLanguage === "vi" ? "Không thể sao chép mã" : "Unable to copy code",
      });
    }
  };

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950 shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/95 px-4 py-2.5 font-mono text-xs uppercase tracking-[.14em] text-slate-400">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="min-w-0 truncate">{displayLanguage}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-slate-500 sm:inline">haiit.dev</span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-slate-200 transition-colors hover:border-primary/70 hover:bg-primary/15 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={copied ? copiedLabel : copyLabel}
            title={copied ? copiedLabel : copyLabel}
          >
            {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
            <span className="sr-only" aria-live="polite">{copied ? copiedLabel : copyLabel}</span>
          </button>
        </div>
      </div>
      <pre className="overflow-x-auto p-0 text-sm leading-7">
        <code className="block min-w-max py-4 font-mono">
          {codeLines.map((line, lineIndex) => (
            <span key={lineIndex} className="grid grid-cols-[3.25rem_1fr]">
              <span className="select-none border-r border-slate-800 px-4 text-right text-slate-600">
                {lineIndex + 1}
              </span>
              <span className="whitespace-pre px-4">
                {line ? renderHighlightedLine(line, language, lineIndex) : " "}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
};

const renderInline = (text: string): ReactNode[] =>
  text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).filter(Boolean).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index} className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[.88em] text-primary">{part.slice(1, -1)}</code>;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  });

interface ArticleContentProps {
  activeSpeechIndex?: number;
  content: string;
  onSpeechSegmentSelect?: (index: number) => void;
  selectedSpeechIndex?: number;
  speechEnabled?: boolean;
}

export const ArticleContent = ({
  activeSpeechIndex,
  content,
  onSpeechSegmentSelect,
  selectedSpeechIndex,
  speechEnabled = false,
}: ArticleContentProps) => {
  const { language: currentLanguage } = useLanguage();
  const [hoveredSpeechIndex, setHoveredSpeechIndex] = useState<number>();
  const lines = content.trim().split("\n");
  const blocks: ReactNode[] = [];
  let index = 0;
  let speechIndex = 0;

  const renderSpeechMarker = (currentSpeechIndex: number) => {
    const selected = selectedSpeechIndex === currentSpeechIndex;
    const active = activeSpeechIndex === currentSpeechIndex;
    const hovered = hoveredSpeechIndex === currentSpeechIndex;
    const enabled = speechEnabled || selected || active;
    const visible = selected || active || hovered;

    if (!enabled) return null;

    return (
      <button
        key={`speech-marker-${currentSpeechIndex}`}
        type="button"
        className={cn(
          "group my-0.5 flex min-h-8 w-full items-center gap-3 rounded-lg px-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
          speechEnabled ? "cursor-pointer hover:bg-primary/[.035]" : "cursor-default",
        )}
        onClick={() => speechEnabled && onSpeechSegmentSelect?.(currentSpeechIndex)}
        onMouseEnter={() => setHoveredSpeechIndex(currentSpeechIndex)}
        onMouseLeave={() => setHoveredSpeechIndex(undefined)}
        disabled={!speechEnabled}
        aria-label={currentLanguage === "vi" ? "Chọn đọc từ vị trí này" : "Select this start point"}
      >
        <span className={cn(
          "h-px flex-1 transition-all duration-200",
          active ? "bg-accent opacity-100" : visible ? "bg-primary opacity-100" : "bg-border/0 opacity-0 group-hover:bg-primary group-hover:opacity-100",
        )} />
        <span className={cn(
          "rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[.14em] shadow-sm backdrop-blur transition-all duration-200",
          visible ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-1 scale-95 opacity-0",
          active
            ? "border-accent/45 bg-accent/15 text-accent"
            : selected || hovered
              ? "border-primary/40 bg-background/95 text-primary"
              : "border-border bg-background/85 text-muted-foreground",
        )}>
          {currentLanguage === "vi" ? "Đọc từ đây" : "Read from here"}
        </span>
        <span className={cn(
          "h-px flex-1 transition-all duration-200",
          active ? "bg-accent opacity-100" : visible ? "bg-primary opacity-100" : "bg-border/0 opacity-0 group-hover:bg-primary group-hover:opacity-100",
        )} />
      </button>
    );
  };

  const withSpeechMarker = (currentSpeechIndex: number, node: ReactNode) => (
    <Fragment key={`speech-block-${currentSpeechIndex}`}>
      {renderSpeechMarker(currentSpeechIndex)}
      {node}
    </Fragment>
  );

  const getSpeechBlockProps = () => {
    const currentSpeechIndex = speechIndex;
    speechIndex += 1;

    return {
      currentSpeechIndex,
      blockProps: {
        className: cn(
          "rounded-lg transition-colors",
          activeSpeechIndex === currentSpeechIndex && "bg-primary/[.09] ring-1 ring-primary/25",
        ),
        "data-speech-index": currentSpeechIndex,
      },
    };
  };

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) { index += 1; continue; }

    if (line.startsWith("```")) {
      const language = line.slice(3).trim();
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        code.push(lines[index]);
        index += 1;
      }
      blocks.push(<CodeBlock key={`code-${index}`} language={language} code={code.join("\n")} />);
      index += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      const speechProps = getSpeechBlockProps();
      blocks.push(withSpeechMarker(speechProps.currentSpeechIndex, <h2 key={index} {...speechProps.blockProps} className={cn(speechProps.blockProps.className, "mb-6 mt-2 px-3 py-2 text-3xl md:text-4xl")}>{renderInline(line.slice(2))}</h2>));
      index += 1; continue;
    }
    if (line.startsWith("## ")) {
      const speechProps = getSpeechBlockProps();
      blocks.push(withSpeechMarker(speechProps.currentSpeechIndex, <h3 key={index} {...speechProps.blockProps} className={cn(speechProps.blockProps.className, "mb-4 mt-12 border-l-2 border-primary py-2 pl-4 pr-3 text-2xl")}>{renderInline(line.slice(3))}</h3>));
      index += 1; continue;
    }
    if (line.startsWith("### ")) {
      const speechProps = getSpeechBlockProps();
      blocks.push(withSpeechMarker(speechProps.currentSpeechIndex, <h4 key={index} {...speechProps.blockProps} className={cn(speechProps.blockProps.className, "mb-3 mt-8 px-3 py-2 text-xl")}>{renderInline(line.slice(4))}</h4>));
      index += 1; continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      const speechProps = getSpeechBlockProps();
      blocks.push(withSpeechMarker(speechProps.currentSpeechIndex, <ul key={`list-${index}`} {...speechProps.blockProps} className={cn(speechProps.blockProps.className, "my-6 space-y-3 px-3 py-2")}>{items.map((item) => <li key={item} className="flex gap-3 leading-7 text-muted-foreground"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /><span>{renderInline(item)}</span></li>)}</ul>));
      continue;
    }

    if (line.startsWith("> ")) {
      const speechProps = getSpeechBlockProps();
      blocks.push(withSpeechMarker(speechProps.currentSpeechIndex, <blockquote key={index} {...speechProps.blockProps} className={cn(speechProps.blockProps.className, "my-8 border-l-2 border-primary bg-primary/[.04] px-5 py-4 text-lg italic leading-8 text-muted-foreground")}>{renderInline(line.slice(2))}</blockquote>));
      index += 1; continue;
    }

    const paragraph = [line];
    index += 1;
    while (index < lines.length && lines[index].trim() && !/^(#{1,3} |```|- |> )/.test(lines[index].trim())) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    const speechProps = getSpeechBlockProps();
    blocks.push(withSpeechMarker(speechProps.currentSpeechIndex, <p key={`p-${index}`} {...speechProps.blockProps} className={cn(speechProps.blockProps.className, "my-5 px-3 py-2 text-[1.02rem] leading-8 text-muted-foreground")}>{renderInline(paragraph.join(" "))}</p>));
  }

  return <div className="article-content">{blocks}</div>;
};
