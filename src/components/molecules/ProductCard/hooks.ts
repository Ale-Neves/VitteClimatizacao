import { CONTACT, MESSAGES } from "../../../constants";

export const useProductCard = () => {
    const handleWhatsAppClick = (title: string, price: number) => {
        const formattedPrice = price.toFixed(2).replace(".", ",");
        const message = encodeURIComponent(
            MESSAGES.WHATSAPP_PRODUCT_INTEREST(title, formattedPrice)
        );
        window.open(`https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${message}`, "_blank");
    };

    return {
        handleWhatsAppClick,
    };
};
