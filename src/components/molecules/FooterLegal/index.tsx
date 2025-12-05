import React from "react";
import { FOOTER, COMPANY } from "../../../constants";
import * as S from "./styles";

interface FooterLegalProps {
    hideTitle?: boolean;
}

export const FooterLegal: React.FC<FooterLegalProps> = ({ hideTitle = false }) => {
    const handleLegalClick = (path: string) => {
        // Aqui você pode navegar para a página legal ou abrir modal
        console.log(`Navigate to: ${path}`);
        // Exemplo: navigate(path);
    };

    return (
        <S.FooterLegalContainer>
            {!hideTitle && <S.Title>Informações Legais</S.Title>}
            <S.LegalList>
                <S.LegalItem>
                    <a onClick={() => handleLegalClick(FOOTER.LEGAL.PRIVACY_POLICY.path)}>
                        {FOOTER.LEGAL.PRIVACY_POLICY.label}
                    </a>
                </S.LegalItem>
                <S.LegalItem>
                    <a onClick={() => handleLegalClick(FOOTER.LEGAL.TERMS_OF_USE.path)}>
                        {FOOTER.LEGAL.TERMS_OF_USE.label}
                    </a>
                </S.LegalItem>
                <S.LegalItem>
                    <a onClick={() => handleLegalClick(FOOTER.LEGAL.COOKIES_POLICY.path)}>
                        {FOOTER.LEGAL.COOKIES_POLICY.label}
                    </a>
                </S.LegalItem>
                <S.LegalItem>
                    <a onClick={() => handleLegalClick(FOOTER.LEGAL.WARRANTY_POLICY.path)}>
                        {FOOTER.LEGAL.WARRANTY_POLICY.label}
                    </a>
                </S.LegalItem>
            </S.LegalList>
            
            <S.CompanyInfo>
                <S.InfoText>CNPJ: {COMPANY.CNPJ}</S.InfoText>
                <S.InfoText>Inscrição Estadual: {COMPANY.IE}</S.InfoText>
            </S.CompanyInfo>
        </S.FooterLegalContainer>
    );
};
