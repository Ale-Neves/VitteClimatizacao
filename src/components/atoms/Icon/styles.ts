import styled, { css } from "styled-components";

const hexToFilter = (hex: string) => {
    switch (hex) {
        case "#00ffff":
            return "brightness(0) saturate(100%) invert(70%) sepia(100%) saturate(2000%) hue-rotate(180deg) brightness(100%) contrast(100%)";
        case "#1B1B1B":
            return "brightness(0) saturate(100%) invert(7%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(95%)";
        case "#00bbff":
            return "brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(2000%) hue-rotate(190deg) brightness(100%) contrast(100%)";
        default:
            return "none";
    }
};

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
        ${({ color }) =>
            color &&
            css`
                filter: ${hexToFilter(color)};
            `}
    }

    svg {
        width: 100%;
        height: 100%;
        fill: ${({ color }) => color || "currentColor"} !important;
    }
`;
