import React from "react";
import { IconContainer } from "./styles";
import type { IconProps } from "./types";

export const Icon: React.FC<IconProps> = ({ name, size = 24, color, className }) => {
    return (
        <IconContainer size={size} color={color} className={className}>
            <img src={name} alt={`Ícone ${name}`} />
        </IconContainer>
    );
};
