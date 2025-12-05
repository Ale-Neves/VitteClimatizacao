import React from "react";
import { ContactForm } from "../../molecules/ContactForm";
import { ContactInfoGrid } from "../../molecules/ContactInfoGrid";
import { CONTACT_SECTION_TEXTS } from "./constants";
import { useContactSection } from "./hooks";
import { CONTACT } from "../../../constants";
import * as S from "./styles";

export const ContactSection: React.FC = () => {
    const { handleFormSubmit } = useContactSection();

    // Gerar URL do Google Maps baseado no endereço
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
        `${CONTACT.ADDRESS}, ${CONTACT.CITY}`
    )}`;

    return (
        <S.ContactSectionContainer id="contatos">
            <S.MainPhrase>{CONTACT_SECTION_TEXTS.MAIN_PHRASE}</S.MainPhrase>
            <S.Title>{CONTACT_SECTION_TEXTS.TITLE}</S.Title>

            <S.ContentWrapper>
                <S.InfoColumn>
                    <ContactInfoGrid />
                </S.InfoColumn>

                <S.FormColumn>
                    <ContactForm onSubmit={handleFormSubmit} />
                </S.FormColumn>
            </S.ContentWrapper>

            <S.MapContainer>
                <iframe
                    src={mapUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Vitte Climatização"
                />
            </S.MapContainer>
        </S.ContactSectionContainer>
    );
};
