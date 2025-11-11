import React from "react";
import { Button } from "../../atoms/Button";
import { WhatsAppIcon, ToolsIcon } from "../../atoms/SvgIcons";
import { imagemHomem } from "./assets";
import { DESC_IMG_HOMEM } from "./constants";
import * as S from "./styles";
import type { BannerProps } from "./types";
import { useBanner } from "./useBanner";

export const Banner: React.FC<BannerProps> = props => {
    const { 
        handleRequestBudget, 
        handleViewServices, 
        bannerText,
        isMobile,
        buttonTexts
    } = useBanner(props);

    return (
        <S.BannerContainer>
            <S.BannerContent>
                <S.TextSection>
                    <S.BannerText>{bannerText}</S.BannerText>
                    <S.ButtonContainer>
                        <Button 
                            variant="primary" 
                            size={isMobile ? "medium" : "large"}
                            onClick={handleRequestBudget}
                            icon={<WhatsAppIcon size={isMobile ? 18 : 20} />}
                            iconPosition="left"
                            fullWidth
                        >
                            {buttonTexts.requestBudget}
                        </Button>
                        <Button 
                            variant="secondary" 
                            size={isMobile ? "medium" : "large"}
                            onClick={handleViewServices}
                            icon={<ToolsIcon size={isMobile ? 18 : 20} />}
                            iconPosition="left"
                            fullWidth
                        >
                            {buttonTexts.services}
                        </Button>
                    </S.ButtonContainer>
                </S.TextSection>
                <S.ImageSection>
                    <S.BannerImage src={imagemHomem} alt={DESC_IMG_HOMEM} />
                </S.ImageSection>
            </S.BannerContent>
        </S.BannerContainer>
    );
};
