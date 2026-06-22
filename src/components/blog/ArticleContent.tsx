import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const copyToClipboard = async (text: string) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
};

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

export const ArticleContent = ({ content }: { content: string }) => {
  const lines = content.trim().split("\n");
  const blocks: ReactNode[] = [];
  let index = 0;

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
      blocks.push(<h2 key={index} className="mb-6 mt-2 text-3xl md:text-4xl">{renderInline(line.slice(2))}</h2>);
      index += 1; continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(<h3 key={index} className="mb-4 mt-12 border-l-2 border-primary pl-4 text-2xl">{renderInline(line.slice(3))}</h3>);
      index += 1; continue;
    }
    if (line.startsWith("### ")) {
      blocks.push(<h4 key={index} className="mb-3 mt-8 text-xl">{renderInline(line.slice(4))}</h4>);
      index += 1; continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      blocks.push(<ul key={`list-${index}`} className="my-6 space-y-3">{items.map((item) => <li key={item} className="flex gap-3 leading-7 text-muted-foreground"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /><span>{renderInline(item)}</span></li>)}</ul>);
      continue;
    }

    if (line.startsWith("> ")) {
      blocks.push(<blockquote key={index} className="my-8 border-l-2 border-primary bg-primary/[.04] px-5 py-4 text-lg italic leading-8 text-muted-foreground">{renderInline(line.slice(2))}</blockquote>);
      index += 1; continue;
    }

    const paragraph = [line];
    index += 1;
    while (index < lines.length && lines[index].trim() && !/^(#{1,3} |```|- |> )/.test(lines[index].trim())) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(<p key={`p-${index}`} className="my-5 text-[1.02rem] leading-8 text-muted-foreground">{renderInline(paragraph.join(" "))}</p>);
  }

  return <div className="article-content">{blocks}</div>;
};
