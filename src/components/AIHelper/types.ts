export interface AIHelperFieldInfo {
  fieldLabel: string;
  fieldDescription?: string;
  fieldType: 'text' | 'email' | 'password' | 'tel' | 'checkbox' | 'select';
}

export interface AIHelperProps {
  fieldInfo: AIHelperFieldInfo;
  isOpen: boolean;
  onToggle: () => void;
}

