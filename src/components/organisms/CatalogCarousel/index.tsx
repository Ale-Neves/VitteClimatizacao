import React from "react";
import { ProductCard } from "../../molecules/ProductCard";
import { CarouselControls } from "../../molecules/CarouselControls";
import type { CatalogCarouselProps } from "./types";
import * as S from "./styles";

export const CatalogCarousel: React.FC<CatalogCarouselProps> = ({
    products,
    currentIndex,
    carouselRef,
    onNext,
    onPrev,
    onGoToSlide,
}) => {
    return (
        <S.CarouselContainer>
            <S.CarouselWrapper ref={carouselRef}>
                {products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </S.CarouselWrapper>

            <CarouselControls
                currentIndex={currentIndex}
                totalSlides={products.length}
                onNext={onNext}
                onPrev={onPrev}
                onGoToSlide={onGoToSlide}
            />
        </S.CarouselContainer>
    );
};
