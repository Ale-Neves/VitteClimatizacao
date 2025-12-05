import { useState, useRef, useEffect } from "react";
import { CATALOG_PRODUCTS_MOCK } from "./mock";

export const useCatalogSection = () => {
    const [showAll, setShowAll] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleToggleShowAll = () => {
        setShowAll(prev => !prev);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            handleNext();
        }

        if (touchStart - touchEnd < -75) {
            handlePrev();
        }
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev + 1) % CATALOG_PRODUCTS_MOCK.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prev => (prev - 1 + CATALOG_PRODUCTS_MOCK.length) % CATALOG_PRODUCTS_MOCK.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (carouselRef.current) {
            const wrapper = carouselRef.current;
            
            requestAnimationFrame(() => {
                const firstCard = wrapper.querySelector('div') as HTMLElement;
                if (firstCard) {
                    const cardWidth = firstCard.offsetWidth;
                    const gap = 16;
                    const scrollPosition = currentIndex * (cardWidth + gap);
                    
                    wrapper.scrollTo({
                        left: scrollPosition,
                        behavior: "smooth",
                    });
                }
            });
        }
    }, [currentIndex]);

    return {
        showAll,
        currentIndex,
        carouselRef,
        products: CATALOG_PRODUCTS_MOCK,
        handleToggleShowAll,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleNext,
        handlePrev,
        goToSlide,
    };
};
