# Markdown Rich Text Editor Guide

A beautiful and feature-rich text editor built with Lexical and React, supporting both rich text formatting and markdown syntax.

## Features

### 🎨 Rich Text Formatting

- **Bold** (Ctrl/Cmd + B or use toolbar)
- _Italic_ (Ctrl/Cmd + I or use toolbar)
- <u>Underline</u> (Ctrl/Cmd + U or use toolbar)
- ~~Strikethrough~~ (use toolbar)
- `Inline code` (use toolbar)

### 📝 Markdown Support

The editor supports live markdown shortcuts while typing:

#### Headers

Type `#` followed by space for different heading levels:

- `# Heading 1`
- `## Heading 2`
- `### Heading 3`

#### Lists

- Type `*` or `-` followed by space for bullet lists
- Type `1.` followed by space for numbered lists

#### Text Formatting

- Type `**text**` for **bold**
- Type `*text*` or `_text_` for _italic_
- Type `` `code` `` for `inline code`
- Type `~~text~~` for ~~strikethrough~~

#### Quotes

- Type `>` followed by space for block quotes

#### Code Blocks

- Type ` ``` ` for code blocks

### 🔧 Toolbar Features

The toolbar provides quick access to:

- **Undo/Redo** - Navigate through your editing history
- **Text Formatting** - Bold, italic, underline, strikethrough, inline code
- **Headings** - H1, H2, H3
- **Lists** - Bullet and numbered lists
- **Quote** - Block quotes
- **Code Block** - Multi-line code blocks
- **Preview** - Toggle markdown preview

### 👁️ Markdown Preview

Click the eye icon in the toolbar to expand the markdown preview panel at the bottom of the editor. This shows the raw markdown representation of your content.

## Keyboard Shortcuts

- `Ctrl/Cmd + B` - Bold
- `Ctrl/Cmd + I` - Italic
- `Ctrl/Cmd + U` - Underline
- `Ctrl/Cmd + Z` - Undo
- `Ctrl/Cmd + Y` or `Ctrl/Cmd + Shift + Z` - Redo

## Getting Started

1. Start typing in the editor
2. Use markdown syntax for quick formatting
3. Or use the toolbar buttons for rich text formatting
4. Click the preview button to see the markdown output

## Technical Stack

- **Lexical** - Meta's extensible text editor framework
- **React** - UI library
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **TypeScript** - Type safety

## Styling

The editor uses Tailwind CSS with a custom theme that supports both light and dark modes. The styling is clean, modern, and follows best UX practices.
