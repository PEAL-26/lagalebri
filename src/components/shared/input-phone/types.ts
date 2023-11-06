export interface InputPhoneProps {
  label: string;
  value?: string;
  onChangeText?(text: string): void;
}
