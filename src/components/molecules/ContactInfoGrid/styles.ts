import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ContactInfoGridContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;

    ${media.sm} {
        gap: 20px;
    }
`;
