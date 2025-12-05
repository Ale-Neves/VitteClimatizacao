import React from "react";
import type { ContactInfoItemProps } from "./types";
import * as S from "./styles";

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
    icon,
    title,
    content,
    href,
}) => {
    return (
        <S.ContactInfoItemContainer>
            <S.IconWrapper>{icon}</S.IconWrapper>
            <S.ContentWrapper>
                <S.Title>{title}</S.Title>
                {href ? (
                    <S.ContentLink href={href} target="_blank" rel="noopener noreferrer">
                        {content}
                    </S.ContentLink>
                ) : (
                    <S.Content>{content}</S.Content>
                )}
            </S.ContentWrapper>
        </S.ContactInfoItemContainer>
    );
};
