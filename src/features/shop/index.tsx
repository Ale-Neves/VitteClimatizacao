import React from "react";
import { UnderConstruction } from "../../components/molecules/UnderConstruction";
import { SEO } from "../../components";

export const ShopPage: React.FC = () => {
    return (
        <>
            <SEO 
                title="Loja Online"
                description="Nossa loja online está em construção. Em breve você poderá comprar produtos de climatização diretamente pelo site."
                noindex
            />
            <UnderConstruction
                title="Loja Online em Construção"
                message="Estamos preparando nossa loja online com os melhores produtos de climatização. Em breve você poderá comprar diretamente pelo site!"
            />
        </>
    );
};
