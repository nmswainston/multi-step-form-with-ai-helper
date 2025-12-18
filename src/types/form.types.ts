export interface FormData {
  // Step 1: Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Step 2: Account Details
  username: string;
  password: string;
  confirmPassword: string;
  
  // Step 3: Preferences
  newsletter: boolean;
  termsAccepted: boolean;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  termsAccepted?: string;
}

export interface StepValidation {
  isValid: boolean;
  errors: FormErrors;
}

