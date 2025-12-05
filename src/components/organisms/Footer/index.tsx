import React from "react";
import { Logo } from "../../atoms/Logo";
import { FooterLinks } from "../../molecules/FooterLinks";
import { FooterSocial } from "../../molecules/FooterSocial";
import { FooterServices } from "../../molecules/FooterServices";
import { FooterLegal } from "../../molecules/FooterLegal";
import { useFooter } from "./hooks";
import { FOOTER } from "../../../constants";
import * as S from "./styles";

export const Footer: React.FC = () => {
    const { openSections, toggleSection, handleLogoClick, isMobile } = useFooter();

    return (
        <S.FooterContainer>
            <S.FooterContent>
                <S.LogoSection>
                    <Logo onClick={handleLogoClick} />
                    <S.Description>{FOOTER.DESCRIPTION}</S.Description>
                    <FooterSocial />
                </S.LogoSection>

                <S.CollapsibleSection $isOpen={openSections.navigation}>
                    <S.SectionHeader
                        $isOpen={openSections.navigation}
                        onClick={() => toggleSection("navigation")}
                    >
                        <S.SectionTitle>Navegação</S.SectionTitle>
                        <S.SectionIcon $isOpen={openSections.navigation}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </S.SectionIcon>
                    </S.SectionHeader>
                    <S.SectionContent $isOpen={openSections.navigation}>
                        <FooterLinks hideTitle={isMobile} />
                    </S.SectionContent>
                </S.CollapsibleSection>

                <S.CollapsibleSection $isOpen={openSections.services}>
                    <S.SectionHeader
                        $isOpen={openSections.services}
                        onClick={() => toggleSection("services")}
                    >
                        <S.SectionTitle>Nossos Serviços</S.SectionTitle>
                        <S.SectionIcon $isOpen={openSections.services}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </S.SectionIcon>
                    </S.SectionHeader>
                    <S.SectionContent $isOpen={openSections.services}>
                        <FooterServices hideTitle={isMobile} />
                    </S.SectionContent>
                </S.CollapsibleSection>

                <S.CollapsibleSection $isOpen={openSections.legal}>
                    <S.SectionHeader
                        $isOpen={openSections.legal}
                        onClick={() => toggleSection("legal")}
                    >
                        <S.SectionTitle>Informações Legais</S.SectionTitle>
                        <S.SectionIcon $isOpen={openSections.legal}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </S.SectionIcon>
                    </S.SectionHeader>
                    <S.SectionContent $isOpen={openSections.legal}>
                        <FooterLegal hideTitle={isMobile} />
                    </S.SectionContent>
                </S.CollapsibleSection>
            </S.FooterContent>

            <S.FooterDivider />

            <S.FooterBottom>
                <S.Copyright>{FOOTER.COPYRIGHT}</S.Copyright>
                <S.DevelopedBy>
                    {FOOTER.DEVELOPED_BY}{" "}
                    <a href={FOOTER.DEVELOPER_URL} target="_blank" rel="noopener noreferrer">
                        {FOOTER.DEVELOPER_NAME}
                    </a>
                </S.DevelopedBy>
            </S.FooterBottom>
        </S.FooterContainer>
    );
};
