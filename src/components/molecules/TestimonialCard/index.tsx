import React, { useState } from "react";
import type { TestimonialCardProps } from "./types";
import * as S from "./styles";

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
    id,
    name,
    avatar,
    servicesCount,
    rating,
    description,
    likes,
    isLiked = false,
    onLike,
}) => {
    const [liked, setLiked] = useState(isLiked);
    const [likesCount, setLikesCount] = useState(likes);

    const handleLike = () => {
        if (onLike) {
            onLike(id);
        }
        setLiked(!liked);
        setLikesCount(prev => liked ? prev - 1 : prev + 1);
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <S.Star key={i} $filled={i <= rating}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0244 3.08203C12.1741 2.62138 12.8259 2.62137 12.9756 3.08203L14.6064 8.10059C14.8073 8.71862 15.3834 9.1377 16.0332 9.1377H21.3105C21.7949 9.13771 21.9963 9.75729 21.6045 10.042L17.335 13.1436C16.8092 13.5255 16.5892 14.2033 16.79 14.8213L18.4209 19.8398C18.5706 20.3004 18.0432 20.6839 17.6514 20.3994L13.3818 17.2969C12.8561 16.9149 12.1439 16.9149 11.6182 17.2969L7.34863 20.3994C6.95679 20.6839 6.42944 20.3004 6.5791 19.8398L8.20996 14.8213C8.41077 14.2033 8.19077 13.5255 7.66504 13.1436L3.39551 10.042C3.00366 9.7573 3.20511 9.13772 3.68945 9.1377H8.9668C9.61664 9.1377 10.1927 8.71862 10.3936 8.10059L12.0244 3.08203Z" 
                              fill="currentColor" 
                              stroke="white"/>
                    </svg>
                </S.Star>
            );
        }
        return stars;
    };

    return (
        <S.TestimonialCardContainer>
            <S.UserInfoContainer>
                <S.Avatar src={avatar} alt={name} />
                <S.UserDetails>
                    <S.UserName>{name}</S.UserName>
                    <S.ServicesCount>
                        {servicesCount} {servicesCount === 1 ? "serviço prestado" : "serviços prestados"}
                    </S.ServicesCount>
                </S.UserDetails>
            </S.UserInfoContainer>

            <S.RatingContainer>
                {renderStars()}
            </S.RatingContainer>

            <S.DescriptionContainer>
                <S.Description>
                    {description}
                </S.Description>
            </S.DescriptionContainer>

            <S.LikesContainer>
                <S.LikesCount>{likesCount}</S.LikesCount>
                <S.LikeButton $isLiked={liked} onClick={handleLike}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </S.LikeButton>
            </S.LikesContainer>
        </S.TestimonialCardContainer>
    );
};
