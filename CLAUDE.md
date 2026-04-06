# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React 19 + TypeScript + Vite 7 frontend project using pnpm as the package manager. It uses Tailwind CSS 4 with shadcn/ui-style components and follows a modern component library pattern.

## Installation

**Always use pnpm for all package management tasks.** Do not use npm, yarn, or any other package manager.

```bash
pnpm install      # Install dependencies (always use pnpm)
```

## Commands

```bash
pnpm install      # Install dependencies (always use pnpm)
pnpm dev          # Start development server
pnpm build        # Build for production (tsc -b && vite build)
pnpm lint         # Run oxlint
pnpm format       # Format code with oxfmt
pnpm typecheck    # Run TypeScript type checking
pnpm preview      # Preview production build
```

## Pre-commit Hooks

Lefthook is configured to run oxlint and oxfmt on staged files before commit.

## Architecture

- **Path alias**: `@` maps to `src/` (configured in `vite.config.ts`)
- **Components**: Located in `src/components/` with shadcn/ui patterns using `class-variance-authority` (CVA) for variant props
- **Styling**: Tailwind CSS 4 with custom CSS variables in `src/index.css` for theming
- **Icons**: Hugeicons (`@hugeicons/react`)
- **UI Components**: Uses both `@base-ui/react` primitives and custom shadcn-style components

## Adding Components

Run `npx shadcn@latest add <component-name>` to add new UI components. They will be placed in `src/components/ui/`.

## Dark Mode

The app includes a ThemeProvider component. Press `d` in the app to toggle dark mode (already implemented in the demo).
