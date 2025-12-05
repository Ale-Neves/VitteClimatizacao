export const NAVIGATION = {
    HOME: "/",
    SERVICES: "#servicos",
    CATALOG: "#catalogo",
    ABOUT: "#historia",
    TESTIMONIALS: "#depoimentos",
    CONTACT: "#contatos",
    SHOP: "/loja",
};

export const TEXTS = {
    NAV: {
        HOME: "Início",
        SERVICES: "Serviços",
        CATALOG: "Catálogo",
        ABOUT: "Sobre Nós",
        TESTIMONIALS: "Depoimentos",
        CONTACT: "Contatos",
        SHOP: "Loja",
    },
};

export const ERROR_MESSAGES = {
    NOTIFICATION_PROVIDER_MISSING: "useNotifications deve ser usado dentro de um NotificationProvider"
};

export const ELEMENT_IDS = {
    SERVICES_SECTION: "servicos"
};

export const CONTACT = {
    WHATSAPP: "+5518997140925",
    WHATSAPP_NUMBER: "5518997140925",
    EMAIL: "diegobritovitte59@gmail.com",
    PHONE: "(18) 99714-0925",
    ADDRESS: "Rua Iracema Nair Baesso Rombaldi, 800 - Res, San Miguel II",
    CEP: "17803-400",
    CITY: "Adamantina/SP",
    HOURS: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h",
};

export const MESSAGES = {
    WHATSAPP_PRODUCT_INTEREST: (title: string, price: string) => 
        `Olá! Tenho interesse no produto: ${title} - R$ ${price}`,
};
