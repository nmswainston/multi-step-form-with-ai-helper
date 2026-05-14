# Multi-Step Form with AI Helper

A guided multi-step form with an embedded AI assistant that helps users complete it.

## Problem

Complex forms — onboarding flows, intake questionnaires, applications — have high abandonment rates because users get stuck or confused partway through and have no one to ask for help.

## Solution

An AI assistant embedded directly in the form that can answer questions, clarify field requirements, and guide users through tricky steps in real time — reducing abandonment and improving data quality.

## Screenshots

> *Add 2–4 screenshots here*

## Tech Stack

- TypeScript
- Vite
- Tailwind CSS

## Features

- Multi-step form with progress tracking
- Inline AI assistant for contextual help at each step
- Form state persists across steps
- Fully responsive mobile layout
- Clean validation with helpful error messages

## Installation

```bash
npm install
```

Add your AI API key to a `.env` file:

```bash
VITE_AI_API_KEY=your_key_here
```

```bash
npm run dev
```

## Lessons Learned

- AI assistance works best when it's contextual — scoped to the current form step rather than open-ended
- Users are more comfortable with AI help when it feels like a guide, not a chatbot
- Managing multi-step form state cleanly in React requires thoughtful architecture upfront

## Future Improvements

- Form analytics to identify which steps have the highest drop-off
- Customizable AI prompt per step
- Admin view to configure form structure without code

---

*Built by [nmswainston](https://github.com/nmswainston)*
