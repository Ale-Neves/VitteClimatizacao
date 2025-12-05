import styled from "styled-components";

export const CarouselControlsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export const ArrowButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.1);
    }
    
    &:active {
        transform: scale(0.95);
    }
`;

export const DotsContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;
`;

export const Dot = styled.button<{ $active: boolean }>`
    width: ${({ $active }) => ($active ? "16px" : "10px")};
    height: ${({ $active }) => ($active ? "16px" : "10px")};
    border-radius: 50%;
    border: none;
    background: ${({ $active, theme }) =>
        $active ? theme.gradients.primary : theme.colors.gray[600]};
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.normal};
    padding: 0;
    box-shadow: ${({ $active, theme }) =>
        $active ? `0 2px 8px ${theme.colors.primary.main}80` : "none"};

    &:hover {
        transform: scale(1.2);
    }
`;
