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

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const { language: currentLanguage } = useLanguage();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number>();
  const copyLabel = currentLanguage === "vi" ? "Sao chép mã" : "Copy code";
  const copiedLabel = currentLanguage === "vi" ? "Đã sao chép" : "Copied";

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
    <div className="my-8 overflow-hidden rounded-xl border border-border/80 bg-background/70">
      <div className="flex items-center justify-between gap-3 border-b border-border/70 px-4 py-2.5 font-mono text-xs uppercase tracking-[.14em] text-muted-foreground">
        <span>{language || "code"}</span>
        <div className="flex items-center gap-3">
          <span className="hidden text-muted-foreground/70 sm:inline">haiit.dev</span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/80 bg-background/80 text-foreground transition-colors hover:border-primary/60 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={copied ? copiedLabel : copyLabel}
            title={copied ? copiedLabel : copyLabel}
          >
            {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
            <span className="sr-only" aria-live="polite">{copied ? copiedLabel : copyLabel}</span>
          </button>
        </div>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-7"><code>{code}</code></pre>
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
