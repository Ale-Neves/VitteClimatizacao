import { useState, useEffect } from "react";
import { TESTIMONIALS_MOCK } from "./mock";

export const useTestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const handleLike = (testimonialId: string) => {
        console.log("Liked testimonial:", testimonialId);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % TESTIMONIALS_MOCK.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return {
        currentIndex,
        testimonials: TESTIMONIALS_MOCK,
        goToSlide,
        handleLike,
    };
};
