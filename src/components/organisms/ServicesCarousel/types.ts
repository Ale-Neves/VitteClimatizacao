export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface ServicesCarouselProps {
    services: Service[];
    currentIndex: number;
    carouselRef: React.RefObject<HTMLDivElement | null>;
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchMove: (e: React.TouchEvent) => void;
    onTouchEnd: () => void;
    onNext: () => void;
    onPrev: () => void;
    onGoToSlide: (index: number) => void;
}
