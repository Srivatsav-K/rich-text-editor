# Rich Text Editor

A modern, feature-rich text editor built with [Lexical](https://lexical.dev/), React, TypeScript, and Tailwind CSS. This editor supports both rich text formatting and live markdown editing with real-time preview.

![Editor Preview](https://img.shields.io/badge/React-19.1-blue) ![Lexical](https://img.shields.io/badge/Lexical-0.36-purple) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)

## Live link

https://sri-rich-text-editor.vercel.app/

## ✨ Features

### 🎨 Rich Text Formatting

- **Text Styles**: Bold, Italic, Underline, Strikethrough, Inline Code
- **Headings**: H1, H2, H3 with customizable styles
- **Lists**: Bullet lists and numbered lists with nesting support
- **Block Quotes**: Beautiful quote styling
- **Code Blocks**: Syntax-highlighted code blocks
- **Undo/Redo**: Full history support with keyboard shortcuts

### 📝 Live Markdown Support

- Type markdown syntax and watch it transform in real-time
- Support for all common markdown features:
  - Headers (`#`, `##`, `###`)
  - Lists (`*`, `-`, `1.`)
  - Text formatting (`**bold**`, `*italic*`, `` `code` ``)
  - Quotes (`>`)
  - Code blocks (` ``` `)

### 👁️ Markdown Preview

- Real-time markdown preview with two view modes:
  - **Rendered**: See your markdown beautifully rendered
  - **Raw**: View the raw markdown output
- Toggle between views with a single click
- Automatically updates as you type

### 🎨 Beautiful UI

- Clean, modern design with Tailwind CSS
- Intuitive toolbar with icon buttons
- Smooth transitions and hover effects
- Professional typography and spacing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd lexical-demo
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

### Keyboard Shortcuts

- `Ctrl/Cmd + B` - Bold
- `Ctrl/Cmd + I` - Italic
- `Ctrl/Cmd + U` - Underline
- `Ctrl/Cmd + Z` - Undo
- `Ctrl/Cmd + Y` or `Ctrl/Cmd + Shift + Z` - Redo

### Markdown Shortcuts

- `# ` - Heading 1
- `## ` - Heading 2
- `### ` - Heading 3
- `* ` or `- ` - Bullet list
- `1. ` - Numbered list
- `> ` - Block quote
- ` ``` ` - Code block
- `**text**` - Bold
- `*text*` - Italic
- `` `code` `` - Inline code

See [EDITOR_GUIDE.md](./EDITOR_GUIDE.md) for more detailed usage instructions.

## 🏗️ Built With

- **[Lexical](https://lexical.dev/)** - Meta's extensible text editor framework
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vite.dev/)** - Build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Marked](https://marked.js.org/)** - Markdown parser and renderer

## 📦 Project Structure

```
src/
├── components/
│   ├── Editor.tsx                      # Main editor component
│   └── plugins/
│       ├── ToolbarPlugin.tsx          # Rich text toolbar
│       └── MarkdownPreviewPlugin.tsx  # Markdown preview
├── styles/
│   └── editor.css                      # Editor-specific styles
├── App.tsx                             # App container
└── main.tsx                            # Entry point
```

## 🎨 Customization

### Styling

The editor uses Tailwind CSS custom properties for theming. You can customize colors, spacing, and other design tokens in `src/index.css`.

### Editor Theme

Modify the `theme` object in `src/components/Editor.tsx` to customize editor element styling.

### Toolbar Buttons

Add or remove toolbar buttons in `src/components/plugins/ToolbarPlugin.tsx`.

## 📝 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [Lexical](https://lexical.dev/) team at Meta for the amazing editor framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons

---

## Original Vite Template Info

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
