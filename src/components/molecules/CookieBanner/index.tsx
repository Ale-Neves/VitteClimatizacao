import React from "react";
import type { CookieBannerProps } from "./types";
import * as S from "./styles";
import { COOKIES, FOOTER } from "../../../constants";
import { useCookieBanner } from "./hooks";

export const CookieBanner: React.FC<CookieBannerProps> = ({
    onAccept,
    onReject,
    className,
}) => {
    const { isVisible, handleAccept, handleReject } = useCookieBanner({
        onAccept,
        onReject,
    });

    return (
        <S.BannerContainer $isVisible={isVisible} className={className}>
            <S.BannerContent>
                <S.TextContent>
                    <S.Title>{COOKIES.BANNER.TITLE}</S.Title>
                    <S.Description>
                        {COOKIES.BANNER.DESCRIPTION} Ao continuar navegando, você concorda com nossa{" "}
                        <S.Link href={FOOTER.LEGAL.COOKIES_POLICY.path} target="_blank">
                            {COOKIES.BANNER.POLICY_LINK_TEXT}
                        </S.Link>
                        .
                    </S.Description>
                </S.TextContent>
                <S.ButtonGroup>
                    <S.RejectButton onClick={handleReject} type="button">
                        {COOKIES.BANNER.REJECT_BUTTON}
                    </S.RejectButton>
                    <S.AcceptButton onClick={handleAccept} type="button">
                        {COOKIES.BANNER.ACCEPT_BUTTON}
                    </S.AcceptButton>
                </S.ButtonGroup>
            </S.BannerContent>
        </S.BannerContainer>
    );
};
