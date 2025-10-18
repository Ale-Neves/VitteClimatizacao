import React from "react";
import { Header } from "../../organisms/Header";
import * as S from "./styles";
import type { PageLayoutProps } from "./types";

export const PageLayout: React.FC<PageLayoutProps> = () => {
    return (
        <S.LayoutContainer>
            <Header />
        </S.LayoutContainer>
    );
};
