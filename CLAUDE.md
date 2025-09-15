# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is Bokang Kgabale's cybersecurity-themed portfolio website built with React, TypeScript, Vite, and shadcn/ui components. The site features a modern cyber aesthetic with neon styling and showcases personal information, projects, skills, education, and experience.

## Development Commands

### Core Development
- `npm run dev` - Start development server (runs on port 8080)
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Installation
- `npm install` - Install dependencies
- Uses bun.lockb for package management (Bun package manager)

## Architecture & Structure

### Key Technologies
- **React 18** with TypeScript
- **Vite** for build tooling
- **shadcn/ui** component library with Radix UI primitives
- **Tailwind CSS** for styling with custom cyberpunk theme
- **React Router DOM** for navigation
- **TanStack Query** for data fetching
- **Lucide React** for icons

### Directory Structure
```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   └── Navbar.tsx    # Main navigation component
├── pages/
│   ├── Home.tsx      # Main landing page with personal info
│   ├── Projects.tsx  # Projects showcase
│   ├── NotFound.tsx  # 404 page
│   └── Index.tsx     # Route index
├── lib/
│   └── utils.ts      # Utility functions (cn helper for class merging)
├── hooks/            # Custom React hooks
└── assets/           # Static assets
```

### Routing
- `/` - Home page (personal info, skills, education, experience)
- `/projects` - Projects showcase page
- `*` - 404 Not Found page

### Component Architecture
- Uses shadcn/ui component system with customizable primitives
- Components follow the `@/` alias pattern (mapped to `src/`)
- Custom hooks in `@/hooks`
- Utilities in `@/lib/utils`

### Styling System
- **Tailwind CSS** with extensive customization
- **Custom color palette** using CSS variables for theming
- **Cyber theme animations**: `fade-in`, `slide-in-right`, `pulse-neon`, `cyber-scan`
- **Custom classes**: `neon-text`, `neon-border`, `cyber-grid`, `glitch`
- **Dark mode support** via `next-themes`

### State Management
- React Query for server state
- React Router for navigation state
- No global state management library (uses React's built-in state)

## Development Notes

### shadcn/ui Configuration
- Components configured in `components.json`
- Uses TypeScript with `.tsx` extension
- CSS variables enabled for theming
- Base color: `slate`

### Code Style
- **ESLint** configuration with React hooks and TypeScript rules
- **TypeScript strict mode** enabled
- **Path aliases** configured in both Vite and TypeScript configs

### Theming
The project uses a cyberpunk/neon aesthetic with:
- Primary colors: Cyber blue/green tones
- Secondary colors: Complementary accent colors
- Custom animations for interactive elements
- Backdrop blur effects and gradient overlays

### Development Environment
- Vite dev server on `::` (IPv6) port 8080
- Hot module replacement enabled
- Component tagging for development (lovable-tagger)

## Important Implementation Details

### Custom Animations
The Tailwind config includes custom keyframes and animations specifically designed for the cyber theme. When adding new components, consider using these existing animations for consistency.

### Component Pattern
Components follow a consistent pattern:
- Import shadcn/ui components from `@/components/ui/`
- Use Lucide icons for consistency
- Apply cyber theme classes (`neon-text`, `neon-border`, etc.)
- Implement responsive design with Tailwind breakpoints

### Asset Handling
- Images are referenced via external URLs (Unsplash)
- No local image assets in the current implementation
- Vite handles static asset processing from `public/` directory