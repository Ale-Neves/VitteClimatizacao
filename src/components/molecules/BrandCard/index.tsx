import React from "react";
import * as S from "./styles";
import type { BrandCardProps } from "./types";

export const BrandCard: React.FC<BrandCardProps> = ({ name, logo }) => {
    return (
        <S.BrandCard>
            <S.BrandLogo
                src={logo}
                alt={`Logo ${name}`}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.style.display = "none";
                }}
            />
        </S.BrandCard>
    );
};
