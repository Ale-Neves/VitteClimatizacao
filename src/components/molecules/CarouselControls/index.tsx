import React from "react";
import type { CarouselControlsProps } from "./types";
import * as S from "./styles";

export const CarouselControls: React.FC<CarouselControlsProps> = ({
    currentIndex,
    totalSlides,
    onNext,
    onPrev,
    onGoToSlide,
}) => {
    return (
        <S.CarouselControlsContainer>
            <S.ArrowButton onClick={onPrev} aria-label="Anterior" />

            <S.DotsContainer>
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <S.Dot
                        key={index}
                        $active={index === currentIndex}
                        onClick={() => onGoToSlide(index)}
                        aria-label={`Ir para slide ${index + 1}`}
                    />
                ))}
            </S.DotsContainer>

            <S.ArrowButton onClick={onNext} aria-label="Próximo" />
        </S.CarouselControlsContainer>
    );
};
