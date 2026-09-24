import { Fragment, ReactNode } from "react";

function renderInline(text: string) {
  const segments = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return segments.map((segment, index) => {
    if (segment.startsWith("**") && segment.endsWith("**")) {
      return <strong key={`${segment}-${index}`}>{segment.slice(2, -2)}</strong>;
    }

    return <Fragment key={`${segment}-${index}`}>{segment}</Fragment>;
  });
}

export function MarkdownContent({ content }: { content: string }) {
  const lines = content.split("\n").filter((line) => line.trim().length > 0);
  const nodes: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (line.startsWith("### ")) {
      nodes.push(
        <h4 key={index} className="text-base font-semibold text-slate-900">
          {renderInline(line.slice(4))}
        </h4>,
      );
      index += 1;
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s/, ""));
        index += 1;
      }
      nodes.push(
        <ol key={index} className="list-decimal space-y-2 pl-5">
          {items.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].startsWith("- ")) {
        items.push(lines[index].slice(2));
        index += 1;
      }
      nodes.push(
        <ul key={index} className="list-disc space-y-2 pl-5">
          {items.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    nodes.push(
      <p key={index} className="text-sm leading-7 text-slate-700">
        {renderInline(line)}
      </p>,
    );
    index += 1;
  }

  return <>{nodes}</>;
}
