import React from "react";
import { TESTIMONIALS_SECTION_TEXTS } from "./constants";
import { useTestimonialsSection } from "./hooks";
import { TestimonialCard } from "../../molecules/TestimonialCard";
import * as S from "./styles";

export const TestimonialsSection: React.FC = () => {
    const {
        currentIndex,
        testimonials,
        goToSlide,
        handleLike,
    } = useTestimonialsSection();

    return (
        <S.TestimonialsSectionContainer id="depoimentos">
            <S.MainPhrase>{TESTIMONIALS_SECTION_TEXTS.MAIN_PHRASE}</S.MainPhrase>
            <S.Title>{TESTIMONIALS_SECTION_TEXTS.TITLE}</S.Title>

            <S.CarouselContainer>
                <S.CarouselWrapper>
                    {testimonials.map((testimonial, index) => (
                        <S.TestimonialWrapper
                            key={testimonial.id}
                            $isActive={index === currentIndex}
                        >
                            <TestimonialCard 
                                {...testimonial}
                                onLike={handleLike}
                            />
                        </S.TestimonialWrapper>
                    ))}
                </S.CarouselWrapper>
            </S.CarouselContainer>

            <S.DotsContainer>
                {testimonials.map((_, index) => (
                    <S.Dot
                        key={index}
                        $active={index === currentIndex}
                        onClick={() => goToSlide(index)}
                        aria-label={`Ir para depoimento ${index + 1}`}
                    />
                ))}
            </S.DotsContainer>
        </S.TestimonialsSectionContainer>
    );
};
