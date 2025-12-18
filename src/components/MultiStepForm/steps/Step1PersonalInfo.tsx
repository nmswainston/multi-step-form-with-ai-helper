import { FormData, FormErrors } from '../../../types/form.types';

interface Step1PersonalInfoProps {
  formData: FormData;
  errors: FormErrors;
  updateField: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
  markFieldAsTouched: (fieldName: string) => void;
  getFieldError: (fieldName: keyof FormErrors) => string | undefined;
  onFieldFocus: (fieldInfo: { fieldLabel: string; fieldDescription?: string; fieldType: string }) => void;
}

export const Step1PersonalInfo = ({
  formData,
  errors,
  updateField,
  markFieldAsTouched,
  getFieldError,
  onFieldFocus,
}: Step1PersonalInfoProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Personal Information</h2>
        <p className="text-gray-600">Let's start with your basic details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
            onBlur={() => markFieldAsTouched('firstName')}
            onFocus={() => onFieldFocus({
              fieldLabel: 'First Name',
              fieldDescription: 'Enter your first or given name',
              fieldType: 'text',
            })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              getFieldError('firstName') ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="John"
          />
          {getFieldError('firstName') && (
            <p className="mt-1 text-sm text-red-600">{getFieldError('firstName')}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
            onBlur={() => markFieldAsTouched('lastName')}
            onFocus={() => onFieldFocus({
              fieldLabel: 'Last Name',
              fieldDescription: 'Enter your last name or surname',
              fieldType: 'text',
            })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              getFieldError('lastName') ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Doe"
          />
          {getFieldError('lastName') && (
            <p className="mt-1 text-sm text-red-600">{getFieldError('lastName')}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          onBlur={() => markFieldAsTouched('email')}
          onFocus={() => onFieldFocus({
            fieldLabel: 'Email Address',
            fieldDescription: 'Enter a valid email address for account verification',
            fieldType: 'email',
          })}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            getFieldError('email') ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="john.doe@example.com"
        />
        {getFieldError('email') && (
          <p className="mt-1 text-sm text-red-600">{getFieldError('email')}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => updateField('phone', e.target.value)}
          onBlur={() => markFieldAsTouched('phone')}
          onFocus={() => onFieldFocus({
            fieldLabel: 'Phone Number',
            fieldDescription: 'Enter your phone number with area code',
            fieldType: 'tel',
          })}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            getFieldError('phone') ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="(123) 456-7890"
        />
        {getFieldError('phone') && (
          <p className="mt-1 text-sm text-red-600">{getFieldError('phone')}</p>
        )}
      </div>
    </div>
  );
};

