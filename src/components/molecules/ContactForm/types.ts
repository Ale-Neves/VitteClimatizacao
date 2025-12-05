export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export interface ContactFormProps {
    onSubmit: (data: ContactFormData) => void;
}
