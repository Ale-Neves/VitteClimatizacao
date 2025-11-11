import React from "react";
import * as S from "./styles";
import type { ModerDividerProps } from "./types";

export const ModerDivider: React.FC<ModerDividerProps> = ({ className }) => {
    return (
        <S.ModerDividerContainer className={className}>
            <S.ModerDividerLine />
        </S.ModerDividerContainer>
    );
};

export default ModerDivider;
