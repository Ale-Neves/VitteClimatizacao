import React from "react";
import { HISTORY_SECTION_TEXTS } from "./constants";
import { useCountAnimation } from "./hooks";
import imgHomemInstalando from "../../../assets/imgs/img_homen_instalando.png";
import * as S from "./styles";

const StatItem: React.FC<{ value: number; label: string; suffix?: string }> = ({ value, label, suffix = "+" }) => {
    const { count, elementRef } = useCountAnimation(value, 2000);
    
    return (
        <S.StatCard ref={elementRef}>
            <S.StatNumber>
                {count}{suffix}
            </S.StatNumber>
            <S.StatLabel>{label}</S.StatLabel>
        </S.StatCard>
    );
};

export const HistorySection: React.FC = () => {
    return (
        <S.HistorySectionContainer id="historia">
            <S.ContentWrapper>
                <S.Title>{HISTORY_SECTION_TEXTS.TITLE}</S.Title>
                
                <S.Subtitle>
                    Mais de <S.SubtitleHighlight>10 Anos</S.SubtitleHighlight> Climatizando Sonhos
                </S.Subtitle>
                
                <S.Description>
                    {HISTORY_SECTION_TEXTS.DESCRIPTION_FIRST}
                </S.Description>
                
                <S.Description>
                    {HISTORY_SECTION_TEXTS.DESCRIPTION_SECOND}
                </S.Description>

                <S.StatsGrid>
                    <StatItem value={500} label={HISTORY_SECTION_TEXTS.STATS.CLIENTS.LABEL} />
                    <StatItem value={1500} label={HISTORY_SECTION_TEXTS.STATS.INSTALLATIONS.LABEL} />
                    <StatItem value={10} label={HISTORY_SECTION_TEXTS.STATS.EXPERIENCE.LABEL} />
                    <StatItem value={98} label={HISTORY_SECTION_TEXTS.STATS.SATISFACTION.LABEL} suffix="%" />
                </S.StatsGrid>
            </S.ContentWrapper>

            <S.ImageWrapper>
                <S.HistoryImage 
                    src={imgHomemInstalando} 
                    alt="Homem instalando ar condicionado" 
                />
            </S.ImageWrapper>
        </S.HistorySectionContainer>
    );
};
