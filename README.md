# Multi-Step Form with AI Helper

A guided multi-step form that uses an AI assistant to help users fill it out.

## Overview

This project combines a traditional multi-step form UX with an integrated AI helper that can answer questions, suggest answers, and guide users through complex form flows. Built as a reusable pattern for onboarding, intake, or configuration workflows where users might need contextual help.

## Tech Stack

- TypeScript
- Vite
- Tailwind CSS
- PostCSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Project Structure

```
src/         # Form steps, AI helper component, and state management
```

## Configuration

The AI helper requires an API key. Add your credentials to a `.env` file:

```env
VITE_AI_API_KEY=your_key_here
```

---

*Built by [nmswainston](https://github.com/nmswainston)*
