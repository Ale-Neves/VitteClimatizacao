import type { ProductCardProps } from "../../molecules/ProductCard/types";


export interface CatalogCarouselProps {
    products: ProductCardProps[];
    currentIndex: number;
    carouselRef: React.RefObject<HTMLDivElement>;
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchMove: (e: React.TouchEvent) => void;
    onTouchEnd: () => void;
    onNext: () => void;
    onPrev: () => void;
    onGoToSlide: (index: number) => void;
}
