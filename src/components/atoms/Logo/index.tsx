import React from "react";
import { logoVitte } from "./assets";
import { useLogo } from "./hooks";
import { LogoContainer, LogoImage, LogoText } from "./styles";
import type { LogoProps } from "./types";

export const Logo: React.FC<LogoProps> = ({ onClick }) => {
    const { isLogoVisible, handleLogoLoad, handleLogoError } = useLogo();

    return (
        <LogoContainer onClick={onClick}>
            <LogoImage
                $isVisible={isLogoVisible}
                src={logoVitte}
                alt="Vitte Climatização Logo"
                onLoad={handleLogoLoad}
                onError={handleLogoError}
            />
            <LogoText $isVisible={isLogoVisible}>Vitte Climatização</LogoText>
        </LogoContainer>
    );
};
