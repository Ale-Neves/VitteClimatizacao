import React from "react";
import { BRANDS_SECTION_TEXTS } from "./constants";
import { brandsData } from "./mock";
import { BrandCard } from "../../molecules/BrandCard";
import iconMarcasParceiras from "../../../assets/icons/icon_marcas_parceiras.svg";
import * as S from "./styles";

export const BrandsSection: React.FC = () => {
    return (
        <S.BrandsSectionContainer id="marcas">
            <S.MainPhrase>{BRANDS_SECTION_TEXTS.MAIN_PHRASE}</S.MainPhrase>

            <S.TitlesContainer>
                <S.BrandsIcon src={iconMarcasParceiras} alt="Marcas Parceiras" />
            </S.TitlesContainer>

            <S.BrandsGrid>
                {brandsData.map(brand => (
                    <BrandCard key={brand.id} {...brand} />
                ))}
            </S.BrandsGrid>

            <S.BrandsDivider />
        </S.BrandsSectionContainer>
    );
};
