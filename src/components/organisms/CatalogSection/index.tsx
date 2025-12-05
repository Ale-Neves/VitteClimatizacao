import React from "react";
import { CATALOG_SECTION_TEXTS } from "./constants";
import { useCatalogSection } from "./hooks";
import { ProductCard } from "../../molecules/ProductCard";
import { CatalogCarousel } from "../CatalogCarousel";
import * as S from "./styles";

export const CatalogSection: React.FC = () => {
    const {
        showAll,
        currentIndex,
        carouselRef,
        products,
        handleToggleShowAll,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleNext,
        handlePrev,
        goToSlide,
    } = useCatalogSection();

    return (
        <S.CatalogSectionContainer id="catalogo">
            <S.MainPhrase>{CATALOG_SECTION_TEXTS.MAIN_PHRASE}</S.MainPhrase>
            <S.Title>{CATALOG_SECTION_TEXTS.TITLE}</S.Title>

            <S.ProductsGrid $showAll={showAll}>
                {products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </S.ProductsGrid>

            <CatalogCarousel
                products={products}
                currentIndex={currentIndex}
                // @ts-ignore
                carouselRef={carouselRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onNext={handleNext}
                onPrev={handlePrev}
                onGoToSlide={goToSlide}
            />

            <S.ViewMoreContainer onClick={handleToggleShowAll}>
                <S.ViewMoreText>
                    {showAll ? CATALOG_SECTION_TEXTS.VIEW_LESS : CATALOG_SECTION_TEXTS.VIEW_MORE}
                </S.ViewMoreText>
                <S.ViewMoreUnderline />
            </S.ViewMoreContainer>
        </S.CatalogSectionContainer>
    );
};
