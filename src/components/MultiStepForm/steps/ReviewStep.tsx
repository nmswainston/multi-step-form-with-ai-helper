import { FormData } from '../../../types/form.types';

interface ReviewStepProps {
  formData: FormData;
  onEdit: (step: number) => void;
}

export const ReviewStep = ({ formData, onEdit }: ReviewStepProps) => {
  const formatPhone = (phone: string) => {
    return phone || 'Not provided';
  };

  const maskPassword = (password: string) => {
    return '•'.repeat(password.length);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Review Your Information</h2>
        <p className="text-gray-600">Please review all your details before submitting</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 space-y-6">
        {/* Personal Information Section */}
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
            <button
              onClick={() => onEdit(1)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">First Name</p>
              <p className="text-base font-medium text-gray-800">{formData.firstName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Name</p>
              <p className="text-base font-medium text-gray-800">{formData.lastName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-base font-medium text-gray-800">{formData.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-base font-medium text-gray-800">{formatPhone(formData.phone)}</p>
            </div>
          </div>
        </div>

        {/* Account Details Section */}
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Account Details</h3>
            <button
              onClick={() => onEdit(2)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Edit
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Username</p>
              <p className="text-base font-medium text-gray-800">{formData.username}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Password</p>
              <p className="text-base font-medium text-gray-800 font-mono">
                {maskPassword(formData.password)}
              </p>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Preferences</h3>
            <button
              onClick={() => onEdit(3)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Edit
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Newsletter Subscription:</span>
              <span className={`text-sm font-medium ${formData.newsletter ? 'text-green-600' : 'text-gray-600'}`}>
                {formData.newsletter ? 'Yes' : 'No'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Terms Accepted:</span>
              <span className={`text-sm font-medium ${formData.termsAccepted ? 'text-green-600' : 'text-red-600'}`}>
                {formData.termsAccepted ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> By clicking "Submit", you confirm that all information is correct
            and you agree to our terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

