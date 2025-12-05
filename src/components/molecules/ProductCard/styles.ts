import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ProductCard = styled.div`
    width: 100%;
    max-width: 280px;
    height: auto;
    min-height: 480px;
    background: linear-gradient(180deg, #ffffff 0%, #cdcdcd 100%);
    border-radius: 16px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform ${({ theme }) => theme.transitions.normal};

    &:hover {
        transform: translateY(-8px);
    }

    ${media.sm} {
        max-width: 300px;
        min-height: 500px;
        border-radius: 17px;
        padding: 19px;
    }

    ${media.md} {
        max-width: 280px;
        min-height: 490px;
        border-radius: 17px;
    }

    ${media.lg} {
        max-width: 310px;
        min-height: 540px;
        border-radius: 18px;
    }

    ${media.xl} {
        max-width: 330px;
        min-height: 570px;
        border-radius: 19px;
        padding: 20px;
    }
`;

export const TagContainer = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 2;
`;

export const Tag = styled.span<{ $variant: "oferta" | "prime" }>`
    display: inline-block;
    width: 80px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: ${({ $variant }) => ($variant === "oferta" ? "#14F1B3" : "#A87CFF")};
    color: #1b1b1b;
    font-size: 12px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family: ${({ theme }) => theme.fonts.secondary};
    text-transform: uppercase;

    ${media.xl} {
        width: 107px;
        height: 33px;
        font-size: 14px;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
`;

export const ProductImage = styled.img`
    width: 220px;
    height: 250px;
    border-radius: 10px;
    object-fit: cover;

    ${media.sm} {
        width: 240px;
        height: 270px;
    }

    ${media.md} {
        width: 220px;
        height: 250px;
    }

    ${media.lg} {
        width: 260px;
        height: 290px;
    }

    ${media.xl} {
        width: 284px;
        height: 319px;
    }
`;

export const ProductTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.secondary};
    text-align: center;
    margin: 15px 0 10px;

    ${media.xl} {
        font-size: 18px;
    }
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-bottom: 15px;
`;

export const OriginalPriceContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const OriginalPrice = styled.span`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: 14px;
    color: #acacac;
    text-decoration: line-through;

    ${media.xl} {
        font-size: 16px;
    }
`;

export const DiscountTag = styled.span`
    display: inline-block;
    padding: 2px 8px;
    background-color: #14f1b3;
    color: #1b1b1b;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 12px;
    border-radius: 4px;

    ${media.xl} {
        font-size: 14px;
    }
`;

export const Price = styled.span`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text.secondary};

    ${media.xl} {
        font-size: 24px;
    }
`;

export const WhatsAppButton = styled.button`
    width: 180px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: transparent;
    border: 2px solid #7c7c7c;
    border-radius: 6px;
    color: #7c7c7c;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-size: 12px;
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.normal};
    margin-top: auto;

    &:hover {
        background-color: rgba(124, 124, 124, 0.1);
        transform: scale(1.05);
    }

    svg {
        width: 16px;
        height: 16px;
        fill: #7c7c7c;
    }

    ${media.xl} {
        width: 207px;
        height: 31px;
        font-size: 13px;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`;
