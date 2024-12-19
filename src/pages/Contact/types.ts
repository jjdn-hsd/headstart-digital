export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  projectDetails: string;
  budget: string;
  preferredContact: 'email' | 'phone';
  attachment?: File;
}

export interface ValidationErrors {
  [key: string]: string;
}