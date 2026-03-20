# Versa ✨

**Create stunning LinkedIn PDF carousels from Markdown — 100% free, no sign-up, runs entirely in your browser.**

[Live Site →](https://versa-hd.netlify.app/)

<!-- TODO: Add updated screenshots -->
![Home Page Screenshot]()
![Editor Page Screenshot]()

## 🎉 Features

- **35+ Themes** — Professional carousel designs built for LinkedIn
- **1600+ Google Fonts** — Powered by the Google Fonts API
- **Auto-Pagination** — Content flows naturally across slides, or use `---` for manual breaks
- **Cover Image** — Add a custom cover image as the first slide
- **Multi-Format Export** — Download as PDF, PNG (per-slide), HTML, or Markdown
- **Starter Templates** — Jump-start your carousel with pre-built templates
- **AI Prompt Copy** — Generate an AI-ready prompt for carousel content
- **Keyboard Shortcuts** — Fast editing with a shortcuts panel
- **Slide Size Picker** — Square (1:1), Portrait (4:5), Story (9:16)
- **Auto-Save** — Saved to browser localStorage automatically
- **Markdown Toolbar** — Add headings, bold, italic, links, images, tables, code blocks, and more
- **Word & Character Count** — Real-time writing stats
- **No Backend** — Everything runs client-side in your browser
- **Privacy-First Analytics** — Cookieless Cloudflare Web Analytics

## 🛠 Tech Stack

- **React 18** + React Router 7
- **Vite** — Build tool
- **Zustand** — State management
- **Tailwind CSS** — Styling
- **pdf-lib** — PDF generation
- **html-to-image** — Slide rasterization
- **DOMPurify** — XSS sanitization
- **GSAP** — Animations
- **react-helmet-async** — SEO

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/HemantDutta/Versa.git
cd Versa/client

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Add your Google Fonts API key to .env

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`.

## 📁 Project Structure

```
client/
├── src/
│   ├── v2/                  # Current version
│   │   ├── pages/           # Home, CarouselEditor, About, Blog, NotFound
│   │   ├── components/      # UI components (FontPicker, ThemePicker, ExportPanel, etc.)
│   │   ├── store/           # Zustand store (useCarouselStore)
│   │   ├── utils/           # PDF/PNG generators, sanitizer, slide paginator
│   │   ├── themes/          # 35+ carousel theme definitions
│   │   ├── hooks/           # Custom hooks (useOnClickOutside, useFocusTrap)
│   │   └── styles/          # Component CSS
│   ├── v1/                  # Legacy version (preserved at /v1 route)
│   └── shared/              # Shared utilities (font loader, parser)
└── public/                  # Static assets
```

## 🤝 Contributing

1. **Fork the repository** and create your branch:
    ```bash
    git checkout -b feature/YourFeatureName
    ```

2. **Make your changes** and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```

3. **Push to your branch**:
    ```bash
    git push origin feature/YourFeatureName
    ```

4. **Open a pull request**.

- **Report Bugs**: [Open an issue](https://github.com/HemantDutta/Versa/issues)
- **Feature Requests**: [Open an issue](https://github.com/HemantDutta/Versa/issues)
- **Pull Requests**: Fork, improve, and submit a PR
