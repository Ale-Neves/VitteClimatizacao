import styled from "styled-components";

export const ModerDividerContainer = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: transparent;
    margin-top: -14px;
    z-index: 1000;
`;

export const ModerDividerLine = styled.div`
    width: 100%;
    height: 2px;
    position: relative;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.8) 15%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.8) 85%,
        rgba(255, 255, 255, 1) 100%
    );
    box-shadow:
        0 0 12px rgba(255, 255, 255, 0.5),
        0 0 24px hsla(0, 0%, 100%, 0.2);

    @media (max-width: 640px) {
        height: 2px;
        box-shadow:
            0 0 8px rgba(255, 255, 255, 0.4),
            0 0 16px rgba(255, 255, 255, 0.15);
    }
`;
