export interface TestimonialCardProps {
    id: string;
    name: string;
    avatar: string;
    servicesCount: number;
    rating: number;
    description: string;
    likes: number;
    isLiked?: boolean;
    onLike?: (id: string) => void;
}
