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

export const COMPANY = {
    CNPJ: "00.000.000/0001-00",
    IE: "000.000.000.000",
};

export const FOOTER = {
    COPYRIGHT: "© 2024 Vitte Climatização. Todos os direitos reservados.",
    DEVELOPED_BY: "Desenvolvido por",
    DEVELOPER_NAME: "Studway",
    DEVELOPER_URL: "https://studway.com.br",
    DESCRIPTION: "Especialistas em climatização e conforto térmico. Instalação, manutenção e venda de ar-condicionado em Adamantina/SP.",
    SOCIAL: {
        FACEBOOK: "https://facebook.com/vitteclimatizacao",
        INSTAGRAM: "https://instagram.com/vitteclimatizacao",
        WHATSAPP: "https://wa.me/5518997140925",
    },
    LEGAL: {
        PRIVACY_POLICY: {
            label: "Política de Privacidade",
            path: "/politica-de-privacidade",
        },
        TERMS_OF_USE: {
            label: "Termos de Uso",
            path: "/termos-de-uso",
        },
        COOKIES_POLICY: {
            label: "Política de Cookies",
            path: "/politica-de-cookies",
        },
        WARRANTY_POLICY: {
            label: "Política de Garantias",
            path: "/politica-de-garantias",
        },
    },
    SERVICES: [
        "Instalação de Ar-Condicionado",
        "Manutenção Preventiva",
        "Manutenção Corretiva",
        "Limpeza de Aparelhos",
        "Venda de Equipamentos",
    ],
};
