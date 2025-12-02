import React from "react";
import * as S from "./styles";
import type { ServiceCardProps } from "./types";

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
    const isACIcon = icon.includes("arcondicionado") || icon.includes("arcond");
    const isLargerIcon = icon.includes("lavadoura");

    return (
        <S.ServiceCard>
            <S.ServiceCardInfo>
                <S.ServiceIcon>
                    <S.IconImage
                        src={icon}
                        alt={`Ícone ${title}`}
                        $isACIcon={isACIcon}
                        $isLarger={isLargerIcon}
                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                </S.ServiceIcon>
                <S.ServiceTitle>{title}</S.ServiceTitle>
                <S.ServiceDescription>{description}</S.ServiceDescription>
            </S.ServiceCardInfo>
        </S.ServiceCard>
    );
};
