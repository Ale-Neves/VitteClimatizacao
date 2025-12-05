import { useState } from "react";
import type { ContactFormData } from "./types";
import { CONTACT_FORM_VALIDATION_MESSAGES } from "./constants";

export const useContactForm = (onSubmit: (data: ContactFormData) => void) => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<Partial<ContactFormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhone = (phone: string) => {
        const cleaned = phone.replace(/\D/g, "");
        return cleaned.length >= 10;
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<ContactFormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = CONTACT_FORM_VALIDATION_MESSAGES.NAME_REQUIRED;
        }

        if (!formData.email.trim()) {
            newErrors.email = CONTACT_FORM_VALIDATION_MESSAGES.EMAIL_REQUIRED;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = CONTACT_FORM_VALIDATION_MESSAGES.EMAIL_INVALID;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = CONTACT_FORM_VALIDATION_MESSAGES.PHONE_REQUIRED;
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = CONTACT_FORM_VALIDATION_MESSAGES.PHONE_INVALID;
        }

        if (!formData.subject.trim()) {
            newErrors.subject = CONTACT_FORM_VALIDATION_MESSAGES.SUBJECT_REQUIRED;
        }

        if (!formData.message.trim()) {
            newErrors.message = CONTACT_FORM_VALIDATION_MESSAGES.MESSAGE_REQUIRED;
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return false;
        }

        return true;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof ContactFormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
        setErrors({});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        try {
            await onSubmit(formData);
            resetForm();
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
    };
};
