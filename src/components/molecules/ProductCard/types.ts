export type ProductTag = "oferta" | "prime";

export interface ProductCardProps {
    id: string;
    image: string;
    title: string;
    originalPrice: number;
    price: number;
    discount?: number;
    tag?: ProductTag;
}
