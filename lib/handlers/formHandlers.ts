import { UseFormSetValue } from 'react-hook-form';

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  website: string;
};

export function setHoneypotValue(setValue: UseFormSetValue<ContactPayload>, value: string): void {
  setValue('website', value);
}
