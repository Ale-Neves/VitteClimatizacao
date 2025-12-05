import styled from "styled-components";
import { media } from "../../../styles/theme";

export const TestimonialCardContainer = styled.div`
    width: 260px;
    height: 310px;
    background: ${({ theme }) => theme.colors.gray[600]};
    border-radius: 30px;
    border: 2px solid ${({ theme }) => theme.colors.text.primary};
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: 0px 1px 40px -20px rgba(255, 255, 255, 0.5);
    position: relative;
    
    /* XSS: card menor */
    @media (max-width: 479px) {
        width: 280px;
        height: 330px;
        padding: 18px;
        gap: 12px;
    }
    
    /* XS: card maior */
    @media (min-width: 480px) and (max-width: 639px) {
        width: 320px;
        height: 360px;
        padding: 20px;
        gap: 14px;
    }
    
    /* MD: card maior */
    ${media.md} {
        width: 280px;
        height: 330px;
        padding: 20px;
        gap: 14px;
    }
    
    /* LG: card maior */
    ${media.lg} {
        width: 300px;
        height: 350px;
        padding: 22px;
        gap: 16px;
    }
    
    /* XL: card maior */
    ${media.xl} {
        width: 280px;
        height: 330px;
        padding: 20px;
        gap: 14px;
    }
`;

export const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const Avatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
`;

export const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const UserName = styled.h3`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
`;

export const ServicesCount = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.primary};
    opacity: 0.7;
    margin: 0;
`;

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    
    svg {
        width: auto;
        height: 20px;
    }
`;

export const Star = styled.div<{ $filled: boolean }>`
    svg {
        path {
            fill: ${({ $filled, theme }) => ($filled ? "#FFBB00" : theme.colors.gray[600])};
        }
    }
`;

export const DescriptionContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    margin-bottom: 8px;
    overflow: hidden;
`;

export const Description = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    line-height: 1.5;
    overflow-y: auto;
    word-break: break-word;
    max-height: 100%;
    padding-right: 4px;
    
    &::-webkit-scrollbar {
        width: 6px;
    }
    
    &::-webkit-scrollbar-track {
        background: ${({ theme }) => `rgba(${parseInt(theme.colors.text.primary.slice(1, 3), 16)}, ${parseInt(theme.colors.text.primary.slice(3, 5), 16)}, ${parseInt(theme.colors.text.primary.slice(5, 7), 16)}, 0.1)`};
        border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.gray[400]};
        border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.colors.gray[300]};
    }
`;

export const ShowMoreButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.gray[600]};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    padding: 0;
    margin-top: 8px;
    text-decoration: underline;
    text-align: left;
    width: fit-content;
    
    &:hover {
        opacity: 0.8;
    }
`;

export const LikesContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: flex-end;
    margin-top: 8px;
`;

export const LikesCount = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const LikeButton = styled.button<{ $isLiked: boolean }>`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
    
    &:hover {
        transform: scale(1.1);
    }
    
    &:active {
        transform: scale(0.95);
    }
    
    svg {
        width: 24px;
        height: 24px;
        fill: ${({ $isLiked }) => ($isLiked ? "#ff0000" : "none")};
        stroke: ${({ $isLiked, theme }) => ($isLiked ? "#ff0000" : theme.colors.text.primary)};
        stroke-width: 2;
    }
`;
