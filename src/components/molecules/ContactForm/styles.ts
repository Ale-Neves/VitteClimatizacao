import styled from "styled-components";
import { media } from "../../../styles/theme";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 32px;
    background: #272729;
    border: 1px solid ${({ theme }) => `${theme.colors.primary.cyan}1A`};
    border-radius: 16px;

    ${media.sm} {
        padding: 40px;
    }
`;

export const FormRow = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    ${media.sm} {
        grid-template-columns: 1fr 1fr;
    }
`;

export const FormField = styled.div`
    width: 100%;
`;

export const SubmitButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`;
