# GitHub Copilot Instructions for colour.sardine.dev

This document provides essential guidance for AI coding agents working on this documentation website for the `@sardine/colour` JavaScript utility library.

## Project Overview

**Project Type**: Documentation website for @sardine/colour library
**Tech Stack**: Astro 5.11.0, TypeScript, Tailwind CSS 4.1.11, MDX  
**Purpose**: Interactive documentation with code examples and live playground demos  
**Target Audience**: JavaScript developers working with color manipulation

## Architecture & Structure

### Core Framework: Astro

- **Static Site Generator**: Astro with content collections for documentation management
- **TypeScript Config**: Strict mode enabled (`astro/tsconfigs/strict`)
- **Build Target**: Static site deployment (Netlify)
- **Dev Server**: `localhost:4321` via `npm run dev`

### Directory Structure

```
/
├── src/
│   ├── components/Navigation.astro    # Dynamic nav with content collections
│   ├── content.config.ts             # Content collection schemas
│   ├── docs/*.md                     # Markdown documentation files
│   ├── layouts/BaseLayout.astro      # Root layout with global styles
│   ├── pages/
│   │   ├── index.astro              # Homepage
│   │   └── docs/[slug].astro        # Dynamic doc pages
│   └── styles/global.css            # CSS custom properties + Tailwind
├── public/
│   ├── playground/*.html            # Interactive demos
│   ├── icons/                       # Favicons and logos
│   └── fonts/                       # Web fonts (Fira Mono)
└── astro.config.mjs                 # Astro + MDX + Tailwind config
```

### Content Management System

- **Content Collections**: Centralized in `src/content.config.ts`
- **Schema Validation**: Zod schemas with strict typing
- **Content Location**: `src/docs/*.md` files with frontmatter
- **Dynamic Routing**: `[slug].astro` generates pages from collection data

## Development Patterns

### Content Architecture

```typescript
// Frontmatter schema for documentation
{
  title: string,              // Page title and navigation label
  tags: "converters" | "utility functions",  // Navigation grouping
  description?: string,       // Optional meta description
  code: boolean              // Indicates code examples present
}
```

### Navigation System

- **Component**: `src/components/Navigation.astro`
- **Data Source**: Astro content collections
- **Grouping**: Posts grouped by `tags` field (converters vs utility functions)
- **Sorting**: Alphabetical by title within groups
- **Mobile**: Hamburger menu with backdrop blur

### Styling Approach

- **CSS Framework**: Tailwind CSS 4.x with Vite plugin
- **Custom Properties**: CSS variables for theming (see `global.css`)
- **Design System**: Dark theme with accent colors (#ffe000, #41c7c7)
- **Typography**: Fira Mono for headings, system fonts for body
- **Responsive**: Mobile-first with xl/2xl breakpoints

### Code Highlighting

- **Syntax Highlighter**: Shiki with Dracula theme
- **Languages**: JavaScript, TypeScript primarily
- **Integration**: Built into Astro markdown processing

## Key Development Guidelines

### When Adding New Documentation

1. **File Creation**: Add new `.md` files to `src/docs/`
2. **Frontmatter**: Use exact schema from `content.config.ts`
3. **Tags**: Must be either `"converters"` or `"utility functions"`
4. **Navigation**: Will auto-update via content collections
5. **URL Generation**: Slugs auto-generated from title (lowercase, spaces → hyphens)

### When Modifying Layouts

1. **Base Layout**: `BaseLayout.astro` contains global head tags, performance monitoring
2. **Props Interface**: Always export TypeScript interfaces for component props
3. **CSS**: Prefer utility classes, use custom properties for theme values
4. **Performance**: Maintain preload hints for fonts and critical resources

### When Working with Interactive Demos

1. **Location**: `public/playground/*.html` for self-contained demos
2. **Library Import**: Use unpkg CDN with specific version pinning
3. **Styling**: Consistent dark theme with gradient borders
4. **Error Handling**: Always wrap library calls in try-catch blocks

### Code Style Preferences

1. **Readability Over Brevity**: Avoid complex functional patterns (e.g., replace `reduce()` with explicit loops)
2. **Type Safety**: Leverage strict TypeScript configuration
3. **Performance**: Optimize for static generation and fast page loads
4. **Accessibility**: Maintain semantic HTML and ARIA labels

## Content Collection Schema

```typescript
const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/docs" }),
  schema: z.object({
    description: z.string().optional(),
    tags: z.enum(["converters", "utility functions"]),
    title: z.string(),
  }),
});
```

## Common Tasks

### Adding a New Documentation Page

```bash
# 1. Create markdown file
touch src/docs/newFunction.md

# 2. Add frontmatter (required)
---
title: New Function Name
tags: converters
description: Optional description
---

# 3. Navigation updates automatically via content collections
```

### Updating Styles

```css
/* Use CSS custom properties for theme consistency */
:root {
  --accent-color: #ffe000;
  --links-color: #41c7c7;
  --primary-color: #222429;
}

/* Leverage Tailwind utilities */
<div class="bg-primary text-accent-color">
```

### Testing Changes

```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Test production build locally
```

## Function Documentation Workflow

When documenting new functions from the `@sardine/colour` library, follow this step-by-step process to ensure quality and proper review:

### Step 1: Research the Function

1. **Identify the function** from the GitHub issues tracker (issues #61-#78)
2. **Research function signature** using the library source code at `github.com/sardinedev/colour`
3. **Study test files** to understand parameters, return types, and edge cases
4. **Review existing documentation** for similar functions to maintain consistency

### Step 2: Create Feature Branch

```bash
# Create a new branch for the specific function
git checkout -b docs/functionName

# Example: git checkout -b docs/convertHextoCSSRGB
```

### Step 3: Create Documentation

1. **Create documentation file**: `src/docs/functionName.md`
2. **Required frontmatter structure**:
   ```yaml
   ---
   title: Descriptive Function Title
   code: true
   tags: converters | utility functions
   ---
   ```
3. **Content sections to include**:
   - **Description**: What the function does and supported formats
   - **Signature**: TypeScript function signature
   - **Examples**: Multiple practical examples covering edge cases
   - **Error Handling**: Common errors and how to handle them
   - **Playground Link**: Link to an interactive demo inside an iframe

### Step 4: Create Interactive Playground

1. **Create playground file**: `public/playground/functionName.html`
2. **Include features**:
   - Live demo with real-time conversion
   - Visual feedback showing results
   - Error handling with user-friendly messages
   - Example suggestions for users to try
   - Consistent styling with site design
3. **Library import**: Use unpkg CDN with specific version
   ```javascript
   import { functionName } from "https://unpkg.com/@sardine/colour@2.1.1-rc.1.0/dist/index.min.js";
   ```

### Step 5: Test Documentation

1. **Start dev server**: `npm run dev`
2. **Verify navigation**: Check function appears in navigation menu
3. **Test playground**: Ensure interactive demo works correctly
4. **Validate examples**: Confirm all code examples work as expected
5. **Check responsive design**: Test on different screen sizes

### Step 6: Commit and Push

```bash
# Stage the files
git add src/docs/functionName.md public/playground/functionName.html

# Commit with descriptive message that references the issue
git commit -m "docs: add functionName documentation and playground

- Add comprehensive documentation for functionName function
- Include function signature, parameters, return type, and examples
- Add interactive playground demo with real-time conversion
- Support for [list key features]
- Proper error handling documentation

Closes #XX"

# Push the branch
git push -u origin docs/functionName
```

### Step 7: Create Pull Request

1. **Create PR** linking to the documentation issue
2. **Use descriptive title**: `docs: add functionName documentation and playground`
3. **Include comprehensive description**:
   - What's included (documentation + playground)
   - Key features implemented
   - Testing checklist
   - Progress update
4. **Link to issue**: Include "Closes #XX" in PR description
5. **Request review**: Assign reviewers for quality control

### Step 8: Address Review Feedback

1. **Make requested changes** on the feature branch
2. **Push updates** to automatically update the PR
3. **Respond to comments** with explanations or confirmations

### Step 9: Merge and Cleanup

1. **Merge PR** when approved (this will automatically close the linked issue)
2. **Delete feature branch** after merge
3. **Update main branch** locally
4. **Update progress tracking** in issue #2 if needed

### Quality Checklist

Before creating a PR, ensure:

- [ ] Function signature is accurate and uses TypeScript types
- [ ] All supported formats/parameters are documented with examples
- [ ] Error handling section includes real error messages
- [ ] British spelling ("colour") is used consistently
- [ ] Examples use correct import syntax
- [ ] Playground demo works without errors
- [ ] Documentation follows existing patterns
- [ ] Frontmatter tags are correct ("converters" or "utility functions")
- [ ] Navigation updates automatically show the new function

### Documentation Standards

- **Tone**: Clear, professional, helpful
- **Code Examples**: Always include imports and realistic use cases
- **Error Examples**: Show actual error messages from the library
- **Playground Features**: Real-time conversion, visual feedback, error handling
- **Consistency**: Follow patterns from existing documentation files

## Important Considerations

### Performance Optimizations

- **LUX Performance Monitoring**: Integrated in BaseLayout
- **Font Loading**: Preload critical fonts with `font-display: swap`
- **Static Generation**: All routes pre-built at build time
- **Image Optimization**: Use appropriate formats and sizes

### SEO & Meta Tags

- **Open Graph**: Configured in BaseLayout for social sharing
- **Structured Data**: Consider adding JSON-LD for function documentation
- **Sitemap**: Auto-generated by Astro

### Browser Compatibility

- **Modern CSS**: Uses CSS custom properties, conic gradients
- **Progressive Enhancement**: Fallbacks for older browsers in global.css
- **ES Modules**: Library demos use modern import syntax

### Netlify Deployment

- **Configuration**: Deployment settings in `netlify.toml`
- **Build Command**: `npm run build` (generates static assets to `dist/`)
- **Output Directory**: `dist/` (Astro's default build output)
- **Static Hosting**: No server-side rendering, pure static site generation
- **Automatic Deployments**: Triggered on git commits to main branch
- **Preview Deployments**: Available for pull requests
- **CDN**: Global distribution via Netlify's CDN
- **Performance**: Benefits from edge caching and optimized asset delivery

#### Netlify-Specific Considerations

1. **Static Assets**: All files in `public/` are served directly from CDN
2. **Playground Demos**: Self-contained HTML files work seamlessly with static hosting
3. **No Server Functions**: Currently uses static generation only (no Netlify Functions)
4. **Build Environment**: Node.js LTS (configured via `.nvmrc`)
5. **Asset Optimization**: Netlify automatically compresses and optimizes static assets

#### Deployment Workflow

```bash
# Local testing before deployment
npm run build        # Test static generation
npm run preview      # Test built site locally

# Deployment happens automatically via git push to main
# Manual deployment via Netlify CLI (if needed):
netlify deploy --prod --dir=dist
```

## Migration Context

This project was migrated from Eleventy 3 to Astro due to:

- Template engine conflicts in Eleventy
- Better TypeScript integration in Astro
- Superior content collection system
- Improved developer experience

The migration preserved:

- All documentation content structure
- Navigation patterns and user experience
- Interactive playground functionality
- Performance optimizations and SEO setup

## Future Development

When extending this project:

1. **Maintain Content Collection Structure**: New content types should extend existing patterns
2. **Preserve Performance**: Keep static generation approach
3. **Extend Component System**: Build reusable Astro components for common patterns
4. **Enhance Interactivity**: Consider Vue/React islands for complex interactions
5. **API Documentation**: Could integrate with library source for auto-generated docs

This codebase prioritizes maintainability, performance, and developer experience while serving as comprehensive documentation for the `@sardine/colour` library.
