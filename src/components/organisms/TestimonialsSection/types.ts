export interface Testimonial {
    id: string;
    name: string;
    avatar: string;
    servicesCount: number;
    rating: number;
    description: string;
    likes: number;
    isLiked?: boolean;
}
