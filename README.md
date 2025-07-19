# colour.sardine.dev

Documentation website for the `@sardine/colour` JavaScript utility library for colour manipulation.

## 🎨 About

This is the official documentation site for [`@sardine/colour`](https://github.com/sardinedev/colour), a tiny JavaScript utility library that provides functions for colour conversion, manipulation, and analysis. The site features interactive documentation with live code examples and playground demos.

**Live Site**: [colour.sardine.dev](https://colour.sardine.dev)

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Content**: [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) - Type-safe content management
- **Syntax Highlighting**: [Shiki](https://shiki.matsu.io) with Dracula theme
- **Deployment**: [Netlify](https://netlify.com) - Static hosting with CDN
- **Language**: TypeScript with strict mode

## � Project Structure

```
/
├── src/
│   ├── components/
│   │   └── Navigation.astro          # Dynamic navigation component
│   ├── content.config.ts              # Content collection schemas
│   ├── docs/                         # Documentation markdown files
│   │   ├── convertHextoRGB.md        # Function documentation
│   │   ├── findNearestColour.md       # Function documentation
│   │   └── ...                       # More function docs
│   ├── layouts/
│   │   └── BaseLayout.astro          # Root layout with global styles
│   ├── pages/
│   │   ├── index.astro               # Homepage
│   │   └── docs/[slug].astro         # Dynamic documentation pages
│   └── styles/
│       └── global.css                # Global styles and CSS variables
├── public/
│   ├── playground/                   # Interactive demo HTML files
│   │   ├── convertHextoRGB.html      # Live function demos
│   │   └── ...                       # More playground files
│   ├── icons/                        # Favicons and logos
│   └── fonts/                        # Web fonts (Fira Mono)
├── astro.config.mjs                   # Astro configuration
├── netlify.toml                      # Netlify deployment config
└── tsconfig.json                      # TypeScript configuration
```

## 🛠️ Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) LTS version
- [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager)

### Getting Started

1. **Clone the repository**

```bash
   git clone https://github.com/sardinedev/colour.sardine.dev.git
   cd colour.sardine.dev
```

2. **Set the correct Node.js version**

```bash
   nvm use
```

3. **Install dependencies**

```bash
   npm install
```

4. **Start development server**

```bash
   npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Available Commands

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start development server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |
| `npm run astro`   | Run Astro CLI commands                       |

## 📝 Adding Documentation

### Creating New Function Documentation

1. **Create a new markdown file** in `src/docs/`:

   ```bash
   touch src/docs/yourFunctionName.md
   ```

2. **Add required frontmatter**:

   ```markdown
   ---
   title: Your Function Name
   tags: converters # or "utility functions"
   description: Brief description of what the function does
   ---

   ## Description

   Detailed explanation of the function...
   ```

3. **Navigation updates automatically** via Astro content collections.

### Content Guidelines

- **Tags**: Use either `"converters"` or `"utility functions"` for proper navigation grouping
- **Code Examples**: Include practical JavaScript examples with expected outputs
- **Playground**: Consider adding an interactive demo in `public/playground/`

## 🎮 Interactive Playgrounds

The site includes interactive demos for testing functions live in the browser:

- Located in `public/playground/*.html`
- Self-contained HTML files with inline styles and scripts
- Import `@sardine/colour` from unpkg CDN
- Consistent dark theme with error handling

### Adding a New Playground

1. Create an HTML file in `public/playground/`
2. Import the library: `import { yourFunction } from "https://unpkg.com/@sardine/colour@latest/dist/index.min.js"`
3. Follow existing playground patterns for styling and functionality
4. Link to it from your documentation markdown

## 🚀 Deployment

The site is automatically deployed to Netlify:

- **Trigger**: Commits to `main` branch
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Domain**: [colour.sardine.dev](https://colour.sardine.dev)

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run build && npm run preview`
5. Submit a pull request

For major changes, please open an issue first to discuss what you would like to change.

## 🔗 Related Links

- **Library Repository**: [github.com/sardinedev/colour](https://github.com/sardinedev/colour)
- **NPM Package**: [@sardine/colour](https://www.npmjs.com/package/@sardine/colour)
- **Documentation Site**: [colour.sardine.dev](https://colour.sardine.dev)
