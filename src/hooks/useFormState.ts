import { useState } from 'react';
import { FormData } from '../types/form.types';

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  username: '',
  password: '',
  confirmPassword: '',
  newsletter: false,
  termsAccepted: false,
};

export const useFormState = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateFields = (fields: Partial<FormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...fields,
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= 3) {
      setCurrentStep(step);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setIsSubmitting(false);
    setSubmitSuccess(false);
  };

  return {
    formData,
    currentStep,
    isSubmitting,
    submitSuccess,
    updateField,
    updateFields,
    nextStep,
    prevStep,
    goToStep,
    setIsSubmitting,
    setSubmitSuccess,
    resetForm,
  };
};

