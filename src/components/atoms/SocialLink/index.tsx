import React from "react";
import type { SocialLinkProps } from "./types";
import * as S from "./styles";

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
    return (
        <S.SocialLinkContainer
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
        >
            {icon}
        </S.SocialLinkContainer>
    );
};
