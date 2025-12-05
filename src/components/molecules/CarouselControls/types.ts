export interface CarouselControlsProps {
    currentIndex: number;
    totalSlides: number;
    onNext: () => void;
    onPrev: () => void;
    onGoToSlide: (index: number) => void;
}
