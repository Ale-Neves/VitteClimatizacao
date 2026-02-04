import React from "react";
import type { UnderConstructionProps } from "./types";
import * as S from "./styles";

export const UnderConstruction: React.FC<UnderConstructionProps> = ({
    title = "Página em Construção",
    message = "Estamos trabalhando para trazer novidades para você. Em breve, esta seção estará disponível!",
    showBackButton = true,
}) => {
    return (
        <S.Container>
            <S.IconWrapper>
                <svg
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Engrenagem 1 */}
                    <g className="gear">
                        <circle
                            cx="100"
                            cy="100"
                            r="30"
                            fill="#1B1B1B"
                            stroke="#00FFFF"
                            strokeWidth="3"
                        />
                        <circle cx="100" cy="100" r="15" fill="#00FFFF" />
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                            const rad = (angle * Math.PI) / 180;
                            const x1 = 100 + Math.cos(rad) * 30;
                            const y1 = 100 + Math.sin(rad) * 30;
                            const x2 = 100 + Math.cos(rad) * 45;
                            const y2 = 100 + Math.sin(rad) * 45;
                            return (
                                <line
                                    key={i}
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke="#00FFFF"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                />
                            );
                        })}
                    </g>

                    {/* Cone de trânsito */}
                    <g transform="translate(145, 130)">
                        <path
                            d="M 0 40 L -15 0 L 15 0 Z"
                            fill="#FF6B00"
                            stroke="#FF8C00"
                            strokeWidth="2"
                        />
                        <rect x="-18" y="40" width="36" height="6" fill="#1B1B1B" />
                        <line
                            x1="-12"
                            y1="15"
                            x2="12"
                            y2="15"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                        />
                        <line
                            x1="-8"
                            y1="28"
                            x2="8"
                            y2="28"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                        />
                    </g>

                    {/* Ferramentas */}
                    <g transform="translate(40, 140)">
                        {/* Chave inglesa */}
                        <path
                            d="M 0 0 L 5 -5 L 10 0 L 8 2 L 2 2 Z"
                            fill="#00BBFF"
                            stroke="#00FFFF"
                            strokeWidth="1.5"
                        />
                        <rect
                            x="1"
                            y="2"
                            width="6"
                            height="20"
                            fill="#00BBFF"
                            stroke="#00FFFF"
                            strokeWidth="1.5"
                        />
                    </g>
                </svg>
            </S.IconWrapper>

            <S.Title>{title}</S.Title>
            <S.Message>{message}</S.Message>

            <S.ProgressContainer>
                <S.ProgressBar>
                    <S.ProgressFill />
                </S.ProgressBar>
                <S.ProgressText>Trabalhando nisso...</S.ProgressText>
            </S.ProgressContainer>

            {showBackButton && (
                <S.BackButton href="/">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                    </svg>
                    Voltar para Home
                </S.BackButton>
            )}
        </S.Container>
    );
};
