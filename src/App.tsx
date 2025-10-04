import { Code, Eye, Sparkles } from "lucide-react";
import Editor from "./components/Editor.js";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Rich text editor
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            A powerful editor combining rich text formatting with live markdown
            support. Start typing to experience the magic! ✨
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm hover:shadow-md transition-shadow">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Live Markdown</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm hover:shadow-md transition-shadow">
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Real-time Preview</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm hover:shadow-md transition-shadow">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Rich Formatting</span>
            </div>
          </div>
        </div>

        {/* Editor Section */}
        <Editor />

        {/* Footer Section */}
        <div className="mt-12 text-center">
          <div className="max-w-3xl mx-auto bg-muted/50 rounded-2xl p-8 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Tips
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Try typing with markdown syntax like{" "}
                <code className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-mono border border-primary/20">
                  **bold**
                </code>
                ,{" "}
                <code className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-mono border border-primary/20">
                  *italic*
                </code>
                , or{" "}
                <code className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-mono border border-primary/20">
                  # heading
                </code>
              </p>
              <p className="text-xs">
                Use the toolbar buttons or keyboard shortcuts (Ctrl+B, Ctrl+I,
                Ctrl+U) for quick formatting
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
