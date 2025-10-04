import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $convertToMarkdownString, TRANSFORMERS } from "@lexical/markdown";
import { useEffect, useState } from "react";
import { marked } from "marked";

export default function MarkdownPreviewPlugin() {
  const [editor] = useLexicalComposerContext();
  const [markdown, setMarkdown] = useState("");
  const [viewMode, setViewMode] = useState<"raw" | "rendered">("rendered");

  useEffect(() => {
    const removeUpdateListener = editor.registerUpdateListener(
      ({ editorState }) => {
        editorState.read(() => {
          const markdownString = $convertToMarkdownString(TRANSFORMERS);
          setMarkdown(markdownString);
        });
      }
    );

    // Initial markdown
    editor.getEditorState().read(() => {
      const markdownString = $convertToMarkdownString(TRANSFORMERS);
      setMarkdown(markdownString);
    });

    return removeUpdateListener;
  }, [editor]);

  const getRenderedMarkdown = () => {
    try {
      return marked(markdown || "");
    } catch {
      return "<p>Error rendering markdown</p>";
    }
  };

  return (
    <div className="markdown-preview-container">
      <details
        className="border-t-2 border-border bg-gradient-to-b from-muted/20 to-muted/30"
        open
      >
        <summary className="cursor-pointer px-6 py-4 hover:bg-muted/60 transition-all duration-200 font-medium text-sm flex items-center justify-between group">
          <span className="flex items-center gap-2 text-base">
            <span className="text-xl">📝</span>
            <span className="group-hover:text-primary transition-colors">
              Markdown Preview
            </span>
          </span>
          <div className="flex gap-2 mr-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setViewMode("rendered")}
              className={`px-4 py-1.5 text-xs rounded-lg font-medium transition-all duration-200 ${
                viewMode === "rendered"
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-card border border-border hover:bg-muted hover:scale-105"
              }`}
            >
              Rendered
            </button>
            <button
              onClick={() => setViewMode("raw")}
              className={`px-4 py-1.5 text-xs rounded-lg font-medium transition-all duration-200 ${
                viewMode === "raw"
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-card border border-border hover:bg-muted hover:scale-105"
              }`}
            >
              Raw
            </button>
          </div>
        </summary>
        <div className="p-6 bg-muted/30">
          {viewMode === "raw" ? (
            <pre className="bg-card border-2 border-border rounded-xl p-6 overflow-x-auto text-sm shadow-inner">
              <code className="text-foreground font-mono">
                {markdown || "// Start typing to see markdown..."}
              </code>
            </pre>
          ) : (
            <div
              className="prose prose-sm max-w-none bg-card border-2 border-border rounded-xl p-6 overflow-x-auto shadow-inner"
              dangerouslySetInnerHTML={{ __html: getRenderedMarkdown() }}
            />
          )}
        </div>
      </details>
    </div>
  );
}
