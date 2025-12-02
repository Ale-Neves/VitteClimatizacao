import { useState, useRef, useEffect } from "react";
import servicesData from "./mock";

export const useServicesSection = () => {
    const initialIndex = Math.floor(servicesData.length / 2);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

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
        setCurrentIndex(prev => (prev + 1) % servicesData.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prev => (prev - 1 + servicesData.length) % servicesData.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (carouselRef.current) {
            const wrapper = carouselRef.current;
            const isFirstRender = currentIndex === initialIndex;
            
            requestAnimationFrame(() => {
                const firstCard = wrapper.querySelector('div') as HTMLElement;
                if (firstCard) {
                    const cardWidth = firstCard.offsetWidth;
                    const gap = 16;
                    const scrollPosition = currentIndex * (cardWidth + gap);
                    
                    wrapper.scrollTo({
                        left: scrollPosition,
                        behavior: isFirstRender ? "auto" : "smooth",
                    });
                }
            });
        }
    }, [currentIndex, initialIndex]);

    return {
        currentIndex,
        carouselRef,
        servicesData,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleNext,
        handlePrev,
        goToSlide,
    };
};
