import { AIHelperFieldInfo } from '../components/AIHelper/types';

export const generateMockAIResponse = (fieldInfo: AIHelperFieldInfo): string => {
  const { fieldLabel, fieldDescription, fieldType } = fieldInfo;

  // Generate contextual responses based on field information
  const responses: Record<string, string> = {
    firstName: `The **First Name** field is where you enter your given name. This is typically the name you go by in everyday life. For example: "John", "Maria", or "David". Make sure to use only letters and avoid special characters.`,
    
    lastName: `The **Last Name** field (also called surname or family name) is your family name that you share with your relatives. Examples include: "Smith", "Garcia", or "Johnson". This helps identify you uniquely along with your first name.`,
    
    email: `The **Email** field requires a valid email address format. It should look like: username@domain.com. For example: "john.doe@example.com" or "maria.smith@gmail.com". Make sure to include the @ symbol and a valid domain. This email will be used for account verification and important communications.`,
    
    phone: `The **Phone Number** field accepts various formats like (123) 456-7890, 123-456-7890, or 1234567890. Make sure to include your area code. This number should be one where we can reach you for account verification purposes.`,
    
    username: `Your **Username** is a unique identifier for your account. It must be at least 3 characters long and can only contain letters, numbers, and underscores. Choose something memorable but secure - avoid using personal information like your real name or email. Examples: "johndoe123", "maria_garcia", or "david2024".`,
    
    password: `Your **Password** must be strong and secure. Requirements:
- At least 8 characters long
- Contains at least one uppercase letter (A-Z)
- Contains at least one lowercase letter (a-z)
- Contains at least one number (0-9)

Example of a strong password: "MySecure123" or "PassWord2024!". Avoid using common words or personal information.`,
    
    confirmPassword: `The **Confirm Password** field ensures you've typed your password correctly. It must match exactly with the password you entered above. This helps prevent typos that could lock you out of your account. Double-check that both fields contain the same password.`,
    
    newsletter: `The **Newsletter** checkbox is optional. If checked, you'll receive updates, promotions, and helpful tips via email. You can unsubscribe at any time. Leaving it unchecked means you'll only receive essential account-related emails.`,
    
    termsAccepted: `The **Terms and Conditions** checkbox is required to create your account. By checking this box, you acknowledge that you have read and agree to our terms of service and privacy policy. This is a legal requirement to use our platform.`,
  };

  // Return specific response if available, otherwise generate generic one
  const fieldKey = fieldLabel.toLowerCase().replace(/\s+/g, '');
  if (responses[fieldKey]) {
    return responses[fieldKey];
  }

  // Generic response based on field type
  const typeBasedResponses: Record<string, string> = {
    email: `This is an **email field**. Please enter a valid email address in the format: username@domain.com. Make sure it's an email you have access to, as we'll use it for account verification.`,
    password: `This is a **password field**. Your password should be strong and unique. Make sure it's at least 8 characters long and includes a mix of uppercase, lowercase letters, and numbers.`,
    text: `This is a **text field** for "${fieldLabel}". ${fieldDescription || 'Please enter the required information accurately.'} Make sure all required fields are filled out before proceeding.`,
    checkbox: `This is a **checkbox** for "${fieldLabel}". ${fieldDescription || 'Check this box if you agree or want to enable this option.'}`,
  };

  return typeBasedResponses[fieldType] || 
    `**${fieldLabel}**: ${fieldDescription || 'Please fill out this field according to the requirements shown.'}`;
};

export const simulateAIThinking = (): Promise<string> => {
  return new Promise((resolve) => {
    // Simulate AI processing delay
    setTimeout(() => {
      resolve('AI response ready');
    }, 500 + Math.random() * 500);
  });
};

