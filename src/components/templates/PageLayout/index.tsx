import React from "react";
import { Header } from "../../organisms/Header";
import { NotificationContainer } from "../../organisms/NotificationContainer";
import * as S from "./styles";
import type { PageLayoutProps } from "./types";

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <S.LayoutContainer>
            <Header />
            <S.MainContent>{children}</S.MainContent>
            <NotificationContainer />
        </S.LayoutContainer>
    );
};
