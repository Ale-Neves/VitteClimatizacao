import React from "react";
import theme from "../../../styles/theme";
import { Icon } from "../../atoms/Icon";
import { imagemHomem } from "./assets";
import { DESC_IMG_HOMEM, DESCRICAO_BANNER } from "./constants";
import * as S from "./styles";
import type { BannerProps } from "./types";
import { useBanner } from "./useBanner";

export const Banner: React.FC<BannerProps> = props => {
    const { handleRequestBudget, handleViewServices, whatsappIcon, ferramentaIcon } =
        useBanner(props);
    const { primary, background } = theme.colors;

    return (
        <S.BannerContainer>
            <S.BannerContent>
                <S.TextSection>
                    <S.BannerText>{DESCRICAO_BANNER}</S.BannerText>
                    <S.ButtonContainer>
                        <S.PrimaryButton onClick={handleRequestBudget}>
                            <Icon name={whatsappIcon} size={20} color={primary.cyan} />
                            <span>Solicitar Orçamento</span>
                        </S.PrimaryButton>
                        <S.SecondaryButton onClick={handleViewServices}>
                            <Icon name={ferramentaIcon} size={20} color={background.primary} />
                            <span>Serviços</span>
                        </S.SecondaryButton>
                    </S.ButtonContainer>
                </S.TextSection>
                <S.ImageSection>
                    <S.BannerImage src={imagemHomem} alt={DESC_IMG_HOMEM} />
                </S.ImageSection>
            </S.BannerContent>
        </S.BannerContainer>
    );
};
