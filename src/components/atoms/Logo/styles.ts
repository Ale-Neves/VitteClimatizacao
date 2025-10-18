import styled from "styled-components";

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const LogoImage = styled.img<{ $isVisible: boolean }>`
    height: 40px;
    width: auto;
    max-width: 150px;
    object-fit: contain;
    display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};

    @media (min-width: 768px) {
        height: 50px;
        max-width: 180px;
    }

    @media (min-width: 992px) {
        height: 60px;
        max-width: 200px;
    }

    @media (min-width: 1400px) {
        height: 65px;
        max-width: 220px;
    }
`;

export const LogoText = styled.h1<{ $isVisible: boolean }>`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    margin-left: ${({ $isVisible }) => ($isVisible ? "0" : "12px")};
    display: ${({ $isVisible }) => ($isVisible ? "none" : "block")};

    @media (min-width: 768px) {
        font-size: 1.5rem;
    }

    @media (min-width: 992px) {
        font-size: 2rem;
    }
`;
