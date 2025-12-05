import React from "react";
import { Input } from "../../atoms/Input";
import { TextArea } from "../../atoms/TextArea";
import { Button } from "../../atoms/Button";
import type { ContactFormProps } from "./types";
import { useContactForm } from "./hooks";
import { CONTACT_FORM_TEXTS } from "./constants";
import * as S from "./styles";

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
    const {
        formData,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
    } = useContactForm(onSubmit);

    return (
        <S.FormContainer onSubmit={handleSubmit}>
            <S.FormRow>
                <S.FormField>
                    <Input
                        name="name"
                        label={CONTACT_FORM_TEXTS.LABELS.NAME}
                        placeholder={CONTACT_FORM_TEXTS.PLACEHOLDERS.NAME}
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        isRequired
                    />
                </S.FormField>
                <S.FormField>
                    <Input
                        name="email"
                        type="email"
                        label={CONTACT_FORM_TEXTS.LABELS.EMAIL}
                        placeholder={CONTACT_FORM_TEXTS.PLACEHOLDERS.EMAIL}
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        isRequired
                    />
                </S.FormField>
            </S.FormRow>

            <S.FormRow>
                <S.FormField>
                    <Input
                        name="phone"
                        type="tel"
                        label={CONTACT_FORM_TEXTS.LABELS.PHONE}
                        placeholder={CONTACT_FORM_TEXTS.PLACEHOLDERS.PHONE}
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        isRequired
                    />
                </S.FormField>
                <S.FormField>
                    <Input
                        name="subject"
                        label={CONTACT_FORM_TEXTS.LABELS.SUBJECT}
                        placeholder={CONTACT_FORM_TEXTS.PLACEHOLDERS.SUBJECT}
                        value={formData.subject}
                        onChange={handleChange}
                        error={errors.subject}
                        isRequired
                    />
                </S.FormField>
            </S.FormRow>

            <S.FormField>
                <TextArea
                    name="message"
                    label={CONTACT_FORM_TEXTS.LABELS.MESSAGE}
                    placeholder={CONTACT_FORM_TEXTS.PLACEHOLDERS.MESSAGE}
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    rows={6}
                    isRequired
                />
            </S.FormField>

            <S.SubmitButtonWrapper>
                <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    isLoading={isSubmitting}
                    isDisabled={isSubmitting}
                >
                    {CONTACT_FORM_TEXTS.BUTTON}
                </Button>
            </S.SubmitButtonWrapper>
        </S.FormContainer>
    );
};
