import { FormData, FormErrors } from '../../../types/form.types';

interface Step3PreferencesProps {
  formData: FormData;
  errors: FormErrors;
  updateField: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
  markFieldAsTouched: (fieldName: string) => void;
  getFieldError: (fieldName: keyof FormErrors) => string | undefined;
  onFieldFocus: (fieldInfo: { fieldLabel: string; fieldDescription?: string; fieldType: string }) => void;
}

export const Step3Preferences = ({
  formData,
  errors,
  updateField,
  markFieldAsTouched,
  getFieldError,
  onFieldFocus,
}: Step3PreferencesProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Preferences</h2>
        <p className="text-gray-600">Almost done! Just a few final details</p>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.newsletter}
            onChange={(e) => updateField('newsletter', e.target.checked)}
            onFocus={() => onFieldFocus({
              fieldLabel: 'Newsletter Subscription',
              fieldDescription: 'Receive updates and promotions via email',
              fieldType: 'checkbox',
            })}
            className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <div className="flex-1">
            <span className="block text-sm font-medium text-gray-700">
              Subscribe to Newsletter
            </span>
            <span className="block text-xs text-gray-500 mt-1">
              Receive updates, promotions, and helpful tips via email. You can unsubscribe at any time.
            </span>
          </div>
        </label>
      </div>

      {/* Terms and Conditions */}
      <div className={`p-6 rounded-lg border-2 ${
        getFieldError('termsAccepted') ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'
      }`}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={(e) => {
              updateField('termsAccepted', e.target.checked);
              markFieldAsTouched('termsAccepted');
            }}
            onFocus={() => onFieldFocus({
              fieldLabel: 'Terms and Conditions',
              fieldDescription: 'You must accept the terms to create an account',
              fieldType: 'checkbox',
            })}
            className={`mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500 ${
              getFieldError('termsAccepted') ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          <div className="flex-1">
            <span className="block text-sm font-medium text-gray-700">
              I accept the Terms and Conditions <span className="text-red-500">*</span>
            </span>
            <span className="block text-xs text-gray-500 mt-1">
              By checking this box, you acknowledge that you have read and agree to our{' '}
              <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </span>
            {getFieldError('termsAccepted') && (
              <p className="mt-2 text-sm text-red-600">{getFieldError('termsAccepted')}</p>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

