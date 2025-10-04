import { $createCodeNode } from "@lexical/code";
import {
  $isListNode,
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  ListNode,
  REMOVE_LIST_COMMAND,
} from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $createHeadingNode,
  $createQuoteNode,
  type HeadingTagType,
} from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import { mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import {
  Bold,
  Code,
  FileText,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Underline,
  Undo,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const LowPriority = 1;

function Divider() {
  return <div className="w-px h-6 bg-border mx-1" />;
}

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [blockType, setBlockType] = useState("paragraph");

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));
      setIsCode(selection.hasFormat("code"));

      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);

      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = element as ListNode;
          const listType = parentList.getListType();
          setBlockType(listType);
        } else {
          const type = element.getType();
          setBlockType(type);
        }
      }
    }
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        REDO_COMMAND,
        () => {
          updateToolbar();
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        UNDO_COMMAND,
        () => {
          updateToolbar();
          return false;
        },
        LowPriority
      )
    );
  }, [editor, updateToolbar]);

  const formatHeading = (headingSize: HeadingTagType) => {
    if (blockType !== headingSize) {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode(headingSize));
        }
      });
    }
  };

  const formatQuote = () => {
    if (blockType !== "quote") {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createQuoteNode());
        }
      });
    }
  };

  const formatCode = () => {
    if (blockType !== "code") {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createCodeNode());
        }
      });
    }
  };

  const formatBulletList = () => {
    if (blockType !== "ul") {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }
  };

  const formatNumberedList = () => {
    if (blockType !== "ol") {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }
  };

  return (
    <div className="toolbar flex items-center gap-1 p-4 border-b-2 border-border bg-gradient-to-r from-muted/40 via-muted/30 to-muted/40 flex-wrap backdrop-blur-sm">
      <button
        onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
        className="toolbar-button p-2.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:scale-105"
        title="Undo (Ctrl+Z)"
        aria-label="Undo"
      >
        <Undo className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
        className="toolbar-button p-2.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:scale-105"
        title="Redo (Ctrl+Y)"
        aria-label="Redo"
      >
        <Redo className="w-4 h-4" />
      </button>

      <Divider />

      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
        className={`toolbar-button p-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${
          isBold
            ? "bg-primary text-primary-foreground shadow-md"
            : "hover:bg-primary/10 hover:text-primary"
        }`}
        title="Bold (Ctrl+B)"
        aria-label="Format Bold"
      >
        <Bold className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
        className={`toolbar-button p-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${
          isItalic
            ? "bg-primary text-primary-foreground shadow-md"
            : "hover:bg-primary/10 hover:text-primary"
        }`}
        title="Italic (Ctrl+I)"
        aria-label="Format Italic"
      >
        <Italic className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")}
        className={`toolbar-button p-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${
          isUnderline
            ? "bg-primary text-primary-foreground shadow-md"
            : "hover:bg-primary/10 hover:text-primary"
        }`}
        title="Underline (Ctrl+U)"
        aria-label="Format Underline"
      >
        <Underline className="w-4 h-4" />
      </button>
      <button
        onClick={() =>
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough")
        }
        className={`toolbar-button p-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${
          isStrikethrough
            ? "bg-primary text-primary-foreground shadow-md"
            : "hover:bg-primary/10 hover:text-primary"
        }`}
        title="Strikethrough"
        aria-label="Format Strikethrough"
      >
        <Strikethrough className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code")}
        className={`toolbar-button p-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${
          isCode
            ? "bg-primary text-primary-foreground shadow-md"
            : "hover:bg-primary/10 hover:text-primary"
        }`}
        title="Inline Code"
        aria-label="Format Code"
      >
        <Code className="w-4 h-4" />
      </button>

      <Divider />

      <button
        onClick={() => formatHeading("h1")}
        className={`toolbar-button p-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${
          blockType === "h1"
            ? "bg-primary text-primary-foreground shadow-md"
            : "hover:bg-primary/10 hover:text-primary"
        }`}
        title="Heading 1"
        aria-label="Format Heading 1"
      >
        <Heading1 className="w-4 h-4" />
      </button>
      <button
        onClick={() => formatHeading("h2")}
        className={`toolbar-button p-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${
          blockType === "h2"
            ? "bg-primary text-primary-foreground shadow-md"
            : "hover:bg-primary/10 hover:text-primary"
        }`}
        title="Heading 2"
        aria-label="Format Heading 2"
      >
        <Heading2 className="w-4 h-4" />
      </button>
      <button
        onClick={() => formatHeading("h3")}
        className={`toolbar-button p-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${
          blockType === "h3"
            ? "bg-primary text-primary-foreground shadow-md"
            : "hover:bg-primary/10 hover:text-primary"
        }`}
        title="Heading 3"
        aria-label="Format Heading 3"
      >
        <Heading3 className="w-4 h-4" />
      </button>

      <Divider />

      <button
        onClick={formatBulletList}
        className={`toolbar-button p-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${
          blockType === "ul"
            ? "bg-primary text-primary-foreground shadow-md"
            : "hover:bg-primary/10 hover:text-primary"
        }`}
        title="Bullet List"
        aria-label="Format Bullet List"
      >
        <List className="w-4 h-4" />
      </button>
      <button
        onClick={formatNumberedList}
        className={`toolbar-button p-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${
          blockType === "ol"
            ? "bg-primary text-primary-foreground shadow-md"
            : "hover:bg-primary/10 hover:text-primary"
        }`}
        title="Numbered List"
        aria-label="Format Numbered List"
      >
        <ListOrdered className="w-4 h-4" />
      </button>
      <button
        onClick={formatQuote}
        className={`toolbar-button p-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${
          blockType === "quote"
            ? "bg-primary text-primary-foreground shadow-md"
            : "hover:bg-primary/10 hover:text-primary"
        }`}
        title="Quote"
        aria-label="Format Quote"
      >
        <Quote className="w-4 h-4" />
      </button>
      <button
        onClick={formatCode}
        className={`toolbar-button p-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${
          blockType === "code"
            ? "bg-primary text-primary-foreground shadow-md"
            : "hover:bg-primary/10 hover:text-primary"
        }`}
        title="Code Block"
        aria-label="Format Code Block"
      >
        <FileText className="w-4 h-4" />
      </button>
    </div>
  );
}
