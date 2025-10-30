import styled from "styled-components";

export const IconContainer = styled.div<{ size?: number; color?: string }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${({ size }) => size || 24}px;
    height: ${({ size }) => size || 24}px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    svg {
        width: 100%;
        height: 100%;
        fill: ${({ color }) => color || "currentColor"} !important;
    }
`;
