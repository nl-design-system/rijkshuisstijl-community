# Rijkshuisstijl (RHS) React + Vite Example App
 
This is a minimal reference implementation designed for developers who want to start using **Rijkshuisstijl Community components** in a React environment.
 
The primary goal of this application is to serve as a "blueprint," showing how to correctly integrate, style, and test RHS components within a modern frontend stack.
 
## Purpose
 
-Provide new users with a working example of RHS components integrated with React and Vite.
 
## Tech Stack
 
- Framework: React
- Build Tool: Vite
- Package Manager: pnpm
- Testing: Playwright (End-to-End Testing)
 
## Getting Started
 
Since this application lives within the `apps/examples` directory of our monorepo, follow these steps:
 
## Install Dependencies
(Run from the monorepo root)
pnpm install
 
## Run Dev Server
 
- Navigate to this directory
cd apps/examples/react-vite
pnpm dev
 
## CI/CD Integration
Error Prevention: If a change in the core components breaks the layout or functionality in this app, the CI pipeline will fail. This prevents broken versions from being released to our consumers.