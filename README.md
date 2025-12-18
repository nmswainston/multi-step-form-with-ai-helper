# Multi-Step Registration Form with AI Helper

A modern, accessible multi-step registration form built with React, TypeScript, and Tailwind CSS. Features include step-by-step validation, progress tracking, and an AI helper sidebar that provides contextual assistance for each form field.

## Features

- **3-Step Registration Form**: Personal Information → Account Details → Preferences
- **Real-time Validation**: Field-level validation with error messages
- **Progress Indicator**: Visual progress bar and step indicators
- **AI Helper Sidebar**: Contextual help for each form field with mock AI responses
- **Review Step**: Final review page before submission
- **Responsive Design**: Mobile-friendly layout
- **Accessible**: Proper labels, ARIA attributes, and keyboard navigation

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite

## Getting Started

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

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── MultiStepForm/
│   │   ├── MultiStepForm.tsx
│   │   ├── ProgressIndicator.tsx
│   │   ├── FormNavigation.tsx
│   │   └── steps/
│   │       ├── Step1PersonalInfo.tsx
│   │       ├── Step2AccountDetails.tsx
│   │       ├── Step3Preferences.tsx
│   │       └── ReviewStep.tsx
│   └── AIHelper/
│       ├── AIHelper.tsx
│       └── types.ts
├── hooks/
│   ├── useFormState.ts
│   └── useFormValidation.ts
├── utils/
│   ├── validation.ts
│   └── mockAI.ts
├── types/
│   └── form.types.ts
└── App.tsx
```

## Form Steps

1. **Personal Information**: First name, last name, email, phone number
2. **Account Details**: Username, password, confirm password
3. **Preferences**: Newsletter subscription, terms & conditions acceptance
4. **Review**: Summary of all entered information

## AI Helper

The AI Helper sidebar provides contextual assistance for each form field:
- Explains the purpose of each field
- Provides example inputs
- Offers helpful tips and requirements
- Uses mock AI responses (can be replaced with real API integration)

## Validation Rules

- **Email**: Valid email format required
- **Phone**: Valid phone number format (various formats accepted)
- **Username**: Minimum 3 characters, alphanumeric and underscores only
- **Password**: Minimum 8 characters, must include uppercase, lowercase, and number
- **Terms**: Must be accepted to proceed

## License

MIT

