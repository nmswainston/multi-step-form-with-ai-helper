import { useState } from 'react';
import { useFormState } from '../../hooks/useFormState';
import { useFormValidation } from '../../hooks/useFormValidation';
import { ProgressIndicator } from './ProgressIndicator';
import { FormNavigation } from './FormNavigation';
import { Step1PersonalInfo } from './steps/Step1PersonalInfo';
import { Step2AccountDetails } from './steps/Step2AccountDetails';
import { Step3Preferences } from './steps/Step3Preferences';
import { ReviewStep } from './steps/ReviewStep';
import { AIHelper } from '../AIHelper/AIHelper';
import { AIHelperFieldInfo } from '../AIHelper/types';

const TOTAL_STEPS = 3;

// Mock API function
const submitForm = async (formData: any): Promise<{ success: boolean; message: string }> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  // Simulate random success/failure (90% success rate for demo)
  const success = Math.random() > 0.1;
  
  return {
    success,
    message: success
      ? 'Your account has been created successfully!'
      : 'Something went wrong. Please try again.',
  };
};

export const MultiStepForm = () => {
  const {
    formData,
    currentStep,
    isSubmitting,
    submitSuccess,
    updateField,
    nextStep,
    prevStep,
    goToStep,
    setIsSubmitting,
    setSubmitSuccess,
    resetForm,
  } = useFormState();

  const { validateCurrentStep, markFieldAsTouched, getFieldError, isStepValid } =
    useFormValidation(formData, currentStep);

  const [aiHelperOpen, setAiHelperOpen] = useState(false);
  const [currentFieldInfo, setCurrentFieldInfo] = useState<AIHelperFieldInfo>({
    fieldLabel: 'Form Field',
    fieldDescription: 'Select a field to get help',
    fieldType: 'text',
  });

  const handleFieldFocus = (fieldInfo: AIHelperFieldInfo) => {
    setCurrentFieldInfo(fieldInfo);
    setAiHelperOpen(true);
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      nextStep();
    }
  };

  const handleBack = () => {
    prevStep();
  };

  const handleEdit = (step: number) => {
    goToStep(step);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await submitForm(formData);
      if (result.success) {
        setSubmitSuccess(true);
      } else {
        alert(result.message);
        setIsSubmitting(false);
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    if (submitSuccess) {
      return (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Success!</h2>
          <p className="text-gray-600 mb-6">Your account has been created successfully.</p>
          <button
            onClick={resetForm}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Another Account
          </button>
        </div>
      );
    }

    if (currentStep > TOTAL_STEPS) {
      return (
        <ReviewStep formData={formData} onEdit={handleEdit} />
      );
    }

    const commonProps = {
      formData,
      errors: {},
      updateField,
      markFieldAsTouched,
      getFieldError,
      onFieldFocus: handleFieldFocus,
    };

    switch (currentStep) {
      case 1:
        return <Step1PersonalInfo {...commonProps} />;
      case 2:
        return <Step2AccountDetails {...commonProps} />;
      case 3:
        return <Step3Preferences {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {!submitSuccess && currentStep <= TOTAL_STEPS && (
            <ProgressIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
          )}

          <div className="min-h-[400px]">{renderStep()}</div>

          {!submitSuccess && (
            <FormNavigation
              currentStep={currentStep}
              totalSteps={TOTAL_STEPS}
              isStepValid={isStepValid()}
              isSubmitting={isSubmitting}
              onBack={handleBack}
              onNext={handleNext}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>

      <AIHelper
        fieldInfo={currentFieldInfo}
        isOpen={aiHelperOpen}
        onToggle={() => setAiHelperOpen(!aiHelperOpen)}
      />
    </div>
  );
};

