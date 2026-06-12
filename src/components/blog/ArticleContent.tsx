import { Fragment, ReactNode } from "react";

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
      blocks.push(
        <div key={`code-${index}`} className="my-8 overflow-hidden rounded-xl border border-border/80 bg-background/70">
          <div className="flex items-center justify-between border-b border-border/70 px-4 py-2 font-mono text-[9px] uppercase tracking-[.16em] text-muted-foreground">
            <span>{language || "code"}</span><span>haiit.dev</span>
          </div>
          <pre className="overflow-x-auto p-5 text-sm leading-7"><code>{code.join("\n")}</code></pre>
        </div>,
      );
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
