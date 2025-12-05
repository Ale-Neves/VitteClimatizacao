import React from "react";
import { ProductCard } from "../../molecules/ProductCard";
import * as S from "./carouselStyles";
import type { CatalogCarouselProps } from "./types";

export const CatalogCarousel: React.FC<CatalogCarouselProps> = ({
    products,
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
                {products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </S.CarouselWrapper>

            <S.CarouselControls>
                <S.ArrowButton onClick={onPrev} aria-label="Anterior" />

                <S.DotsContainer>
                    {products.map((_, index) => (
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
