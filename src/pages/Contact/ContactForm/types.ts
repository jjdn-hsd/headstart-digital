export interface ContactFormData {
  fullName: string;
  email: string;
  companyName: string;
  phone: string;
  website: string;
  message: string;
}

export interface ValidationErrors {
  [key: string]: string;
}