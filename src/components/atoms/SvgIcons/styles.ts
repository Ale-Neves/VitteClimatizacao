import styled from "styled-components";

export const IconWrapper = styled.span<{ $size?: number; $color?: string }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${({ $size }) => $size || 24}px;
    height: ${({ $size }) => $size || 24}px;
    color: ${({ $color }) => $color || "currentColor"};
    flex-shrink: 0;
    
    svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
        stroke: currentColor;
    }
`;
