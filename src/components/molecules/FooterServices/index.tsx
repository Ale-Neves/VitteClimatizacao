import React from "react";
import { FOOTER } from "../../../constants";
import * as S from "./styles";

interface FooterServicesProps {
    hideTitle?: boolean;
}

export const FooterServices: React.FC<FooterServicesProps> = ({ hideTitle = false }) => {
    return (
        <S.FooterServicesContainer>
            {!hideTitle && <S.Title>Nossos Serviços</S.Title>}
            <S.ServicesList>
                {FOOTER.SERVICES.map((service, index) => (
                    <S.ServiceItem key={index}>{service}</S.ServiceItem>
                ))}
            </S.ServicesList>
        </S.FooterServicesContainer>
    );
};
