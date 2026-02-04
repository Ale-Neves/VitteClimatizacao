import React from "react";
import { NAVIGATION, TEXTS } from "../../../constants";
import * as S from "./styles";

interface FooterLinksProps {
    hideTitle?: boolean;
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ hideTitle = false }) => {
    const handleNavClick = (href: string) => {
        if (href === NAVIGATION.HOME || href === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (href.startsWith("#")) {
            const id = href.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <S.FooterLinksContainer>
            {!hideTitle && <S.Title>Navegação</S.Title>}
            <S.LinksList>
                <S.LinkItem>
                    <a onClick={() => handleNavClick(NAVIGATION.HOME)}>{TEXTS.NAV.HOME}</a>
                </S.LinkItem>
                <S.LinkItem>
                    <a onClick={() => handleNavClick(NAVIGATION.SERVICES)}>{TEXTS.NAV.SERVICES}</a>
                </S.LinkItem>
                <S.LinkItem>
                    <a onClick={() => handleNavClick(NAVIGATION.ABOUT)}>{TEXTS.NAV.ABOUT}</a>
                </S.LinkItem>
                {/* <S.LinkItem>
                    <a onClick={() => handleNavClick(NAVIGATION.CATALOG)}>
                        {TEXTS.NAV.CATALOG}
                    </a>
                </S.LinkItem> */}
                <S.LinkItem>
                    <a onClick={() => handleNavClick(NAVIGATION.TESTIMONIALS)}>
                        {TEXTS.NAV.TESTIMONIALS}
                    </a>
                </S.LinkItem>
                <S.LinkItem>
                    <a onClick={() => handleNavClick(NAVIGATION.CONTACT)}>{TEXTS.NAV.CONTACT}</a>
                </S.LinkItem>
            </S.LinksList>
        </S.FooterLinksContainer>
    );
};
