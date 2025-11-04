import React from "react";
import { Button } from "../../atoms/Button";
import { WhatsAppIcon, ToolsIcon } from "../../atoms/SvgIcons";
import { imagemHomem } from "./assets";
import { DESC_IMG_HOMEM } from "./constants";
import * as S from "./styles";
import type { BannerProps } from "./types";
import { useBanner } from "./useBanner";

export const Banner: React.FC<BannerProps> = props => {
    const { handleRequestBudget, handleViewServices, bannerText } = useBanner(props);

    return (
        <S.BannerContainer>
            <S.BannerContent>
                <S.TextSection>
                    <S.BannerText>{bannerText}</S.BannerText>
                    <S.ButtonContainer>
                        <Button 
                            variant="primary" 
                            size="large"
                            onClick={handleRequestBudget}
                            icon={<WhatsAppIcon size={20} />}
                            iconPosition="left"
                            fullWidth
                        >
                            Solicitar Orçamento
                        </Button>
                        <Button 
                            variant="secondary" 
                            size="large"
                            onClick={handleViewServices}
                            icon={<ToolsIcon size={20} />}
                            iconPosition="left"
                            fullWidth
                        >
                            Serviços
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
