import { useState, useEffect } from 'react';
import { FormData, FormErrors } from '../types/form.types';
import { validateStep1, validateStep2, validateStep3 } from '../utils/validation';

export const useFormValidation = (formData: FormData, currentStep: number) => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let validationResult;
    
    switch (currentStep) {
      case 1:
        validationResult = validateStep1(formData);
        break;
      case 2:
        validationResult = validateStep2(formData);
        break;
      case 3:
        validationResult = validateStep3(formData);
        break;
      default:
        validationResult = { isValid: true, errors: {} };
    }

    setErrors(validationResult.errors);
  }, [formData, currentStep]);

  const validateCurrentStep = (): boolean => {
    let validationResult;
    
    switch (currentStep) {
      case 1:
        validationResult = validateStep1(formData);
        break;
      case 2:
        validationResult = validateStep2(formData);
        break;
      case 3:
        validationResult = validateStep3(formData);
        break;
      default:
        validationResult = { isValid: true, errors: {} };
    }

    setErrors(validationResult.errors);
    return validationResult.isValid;
  };

  const markFieldAsTouched = (fieldName: string) => {
    setTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  const getFieldError = (fieldName: keyof FormErrors): string | undefined => {
    return touched[fieldName] ? errors[fieldName] : undefined;
  };

  const isStepValid = (): boolean => {
    return Object.keys(errors).length === 0;
  };

  return {
    errors,
    touched,
    validateCurrentStep,
    markFieldAsTouched,
    getFieldError,
    isStepValid,
  };
};

