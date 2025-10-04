# Features Overview

## 🎯 Core Functionality

### 1. Rich Text Editor

- Built on Meta's Lexical framework
- Fully extensible and customizable
- Type-safe with TypeScript
- Optimized performance

### 2. Toolbar Controls

Located at the top of the editor with the following buttons:

#### History Controls

- **Undo** - Revert last change
- **Redo** - Reapply undone change

#### Text Formatting

- **Bold** - Make text bold (Ctrl/Cmd + B)
- **Italic** - Italicize text (Ctrl/Cmd + I)
- **Underline** - Underline text (Ctrl/Cmd + U)
- **Strikethrough** - Strike through text
- **Inline Code** - Format as inline code

#### Block Formatting

- **H1** - Large heading
- **H2** - Medium heading
- **H3** - Small heading
- **Bullet List** - Unordered list
- **Numbered List** - Ordered list
- **Quote** - Block quote styling
- **Code Block** - Multi-line code with syntax highlighting

### 3. Markdown Support

#### Live Transformation

Type markdown syntax and watch it instantly transform:

````markdown
# This becomes a H1 heading

## This becomes a H2 heading

### This becomes a H3 heading

**This becomes bold text**
_This becomes italic text_
`This becomes inline code`
~~This becomes strikethrough~~

- Bullet list item

* Another bullet item

1. Numbered list item

> This becomes a quote

​`
This becomes a code block
​`
````

### 4. Markdown Preview Panel

#### Two View Modes

1. **Rendered View** (Default)

   - Beautiful HTML rendering of your markdown
   - Proper typography and spacing
   - Styled code blocks, quotes, and lists
   - Professional appearance

2. **Raw View**
   - Shows the actual markdown syntax
   - Useful for copying markdown
   - Great for debugging formatting

#### Features

- Expandable/collapsible panel
- Toggle between rendered and raw views
- Real-time updates as you type
- Syntax highlighting in raw view

### 5. Keyboard Shortcuts

| Shortcut             | Action             |
| -------------------- | ------------------ |
| Ctrl/Cmd + B         | Bold               |
| Ctrl/Cmd + I         | Italic             |
| Ctrl/Cmd + U         | Underline          |
| Ctrl/Cmd + Z         | Undo               |
| Ctrl/Cmd + Y         | Redo               |
| Ctrl/Cmd + Shift + Z | Redo (alternative) |

### 6. Styling & Design

#### Clean UI

- Modern, minimal design
- Intuitive icon-based toolbar
- Smooth hover effects
- Professional typography

#### Color Scheme

- Uses CSS custom properties
- Tailwind CSS integration
- Light mode optimized
- Dark mode ready (extensible)

#### Responsive

- Works on desktop screens
- Maximum width for optimal readability
- Centered layout

### 7. Code Highlighting

#### Syntax Support

- Function names
- Keywords
- Strings
- Comments
- Operators
- Properties
- Variables
- Punctuation

#### Visual Styling

- Dark code block background
- Color-coded syntax elements
- Monospace font
- Proper indentation

## 🔧 Technical Features

### Plugin Architecture

- **RichTextPlugin** - Core editing functionality
- **HistoryPlugin** - Undo/redo support
- **ListPlugin** - List formatting
- **LinkPlugin** - Link support
- **MarkdownShortcutPlugin** - Live markdown transformation
- **ToolbarPlugin** - Custom toolbar controls
- **MarkdownPreviewPlugin** - Custom preview panel

### Node Types

- HeadingNode (H1-H6)
- QuoteNode
- ListNode & ListItemNode
- CodeNode with highlighting
- LinkNode & AutoLinkNode
- TableNode support (extensible)

### Performance

- Efficient state updates
- Minimal re-renders
- Lazy loading where possible
- Optimized DOM updates

## 📋 Use Cases

1. **Blog Writing** - Draft blog posts in markdown
2. **Documentation** - Write technical documentation
3. **Note Taking** - Rich text notes with formatting
4. **Code Snippets** - Share formatted code
5. **Technical Writing** - Articles with code examples
6. **README Files** - Create GitHub README content
7. **Email Drafting** - Rich formatted emails
8. **Content Management** - CMS content editing

## 🚀 Future Enhancements (Extensible)

The editor is built to support:

- Image uploads
- File attachments
- Tables
- Mentions (@user)
- Hashtags (#topic)
- Custom emojis
- Collaborative editing
- Export to PDF/HTML
- Import from various formats
- Custom themes
- Plugins marketplace

## 💡 Best Practices

1. **For Bold**: Use `**text**` in markdown or Ctrl/Cmd + B
2. **For Lists**: Start with `* ` or `1. ` then type
3. **For Code**: Use ` ``` ` for blocks, `` `code` `` for inline
4. **For Headings**: Use `#` followed by space
5. **Preview Often**: Check the markdown preview to ensure formatting
6. **Keyboard Shortcuts**: Learn the shortcuts for faster editing

## 🎨 Customization Points

1. **Toolbar Buttons** - Add/remove in ToolbarPlugin.tsx
2. **Markdown Transformers** - Customize in Editor.tsx
3. **Styling** - Modify editor.css and index.css
4. **Theme Colors** - Update CSS custom properties
5. **Node Types** - Add custom node types for new features
6. **Plugins** - Create custom plugins for specific needs

---

Built with ❤️ using Lexical, React, and Tailwind CSS
