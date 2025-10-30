import styled from "styled-components";

export const NotificationPortal = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    pointer-events: none;

    & > * {
        pointer-events: auto;
    }

    ${({ theme }) => theme.breakpoints.sm} {
        top: 10px;
        right: 10px;
        left: 10px;

        & > * {
            margin-left: auto;
            margin-right: auto;
        }
    }
`;
