import React from "react";
import { SERVICES_SECTION_TEXTS } from "./constants";
import { useServicesSection } from "./hooks";
import { ServiceCard } from "../../molecules/ServiceCard";
import { ServicesCarousel } from "../ServicesCarousel";
import iconMeusServicos from "../../../assets/icons/icon_meus_servicos.svg";
import * as S from "./styles";

export const ServicesSection: React.FC = () => {
    const {
        currentIndex,
        carouselRef,
        servicesData,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleNext,
        handlePrev,
        goToSlide,
    } = useServicesSection();

    return (
        <S.ServicesSectionContainer id="servicos">
            <S.MainPhrase>{SERVICES_SECTION_TEXTS.MAIN_PHRASE}</S.MainPhrase>

            <S.TitlesContainer>
                <S.ServicesIcon src={iconMeusServicos} alt="Meus Serviços" />
            </S.TitlesContainer>

            <S.ServicesGrid>
                {servicesData.map(service => (
                    <ServiceCard key={service.id} {...service} />
                ))}
            </S.ServicesGrid>

            <ServicesCarousel
                services={servicesData}
                currentIndex={currentIndex}
                carouselRef={carouselRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onNext={handleNext}
                onPrev={handlePrev}
                onGoToSlide={goToSlide}
            />
        </S.ServicesSectionContainer>
    );
};
