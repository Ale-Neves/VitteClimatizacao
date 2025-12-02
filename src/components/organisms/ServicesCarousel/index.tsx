import React from "react";
import { ServiceCard } from "../../molecules/ServiceCard";
import * as S from "./styles";
import type { ServicesCarouselProps } from "./types";

export const ServicesCarousel: React.FC<ServicesCarouselProps> = ({
    services,
    currentIndex,
    carouselRef,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onNext,
    onPrev,
    onGoToSlide,
}) => {
    return (
        <S.CarouselContainer>
            <S.CarouselWrapper
                ref={carouselRef}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {services.map(service => (
                    <ServiceCard key={service.id} {...service} />
                ))}
            </S.CarouselWrapper>

            <S.CarouselControls>
                <S.ArrowButton onClick={onPrev} aria-label="Anterior" />

                <S.DotsContainer>
                    {services.map((_, index) => (
                        <S.Dot
                            key={index}
                            $active={index === currentIndex}
                            onClick={() => onGoToSlide(index)}
                            aria-label={`Ir para slide ${index + 1}`}
                        />
                    ))}
                </S.DotsContainer>

                <S.ArrowButton onClick={onNext} aria-label="Próximo" />
            </S.CarouselControls>
        </S.CarouselContainer>
    );
};
