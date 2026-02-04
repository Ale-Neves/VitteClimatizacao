export const SEO = {
    SITE_NAME: "Vitte Climatização",
    SITE_URL: "https://vitteclimatizacao.com.br",
    DEFAULT_TITLE: "Vitte Climatização - Especialistas em Ar-Condicionado | Adamantina/SP",
    DEFAULT_DESCRIPTION: "Instalação, manutenção e venda de ar-condicionado em Adamantina/SP. Atendimento especializado, garantia e as melhores marcas do mercado. Orçamento sem compromisso!",
    DEFAULT_KEYWORDS: [
        "ar-condicionado adamantina",
        "instalação ar-condicionado",
        "manutenção ar-condicionado",
        "climatização adamantina",
        "conserto ar-condicionado",
        "limpeza ar-condicionado",
        "venda ar-condicionado",
        "assistência técnica climatização",
        "ar-condicionado split",
        "climatização residencial",
        "climatização comercial",
    ],
    SOCIAL: {
        FACEBOOK: "https://facebook.com/vitteclimatizacao",
        INSTAGRAM: "https://instagram.com/vitteclimatizacao",
        WHATSAPP: "https://wa.me/5518997140925",
    },
    IMAGES: {
        LOGO: "/logo-vitte-climatizacao.png",
        OG_IMAGE: "/og-image.jpg",
        BANNER: "/banner-vitte.jpg",
    },
    STRUCTURED_DATA: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Vitte Climatização",
        image: "https://vitteclimatizacao.com.br/logo-vitte-climatizacao.png",
        "@id": "https://vitteclimatizacao.com.br",
        url: "https://vitteclimatizacao.com.br",
        telephone: "+5518997140925",
        priceRange: "$$",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Iracema Nair Baesso Rombaldi, 800 - Res, San Miguel II",
            addressLocality: "Adamantina",
            addressRegion: "SP",
            postalCode: "17803-400",
            addressCountry: "BR",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: -21.6847,
            longitude: -51.0733,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "12:00",
            },
        ],
        sameAs: [
            "https://facebook.com/vitteclimatizacao",
            "https://instagram.com/vitteclimatizacao",
        ],
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "127",
        },
        areaServed: {
            "@type": "City",
            name: "Adamantina",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Serviços de Climatização",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Instalação de Ar-Condicionado",
                        description: "Instalação profissional de sistemas de ar-condicionado residencial e comercial",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Manutenção Preventiva",
                        description: "Manutenção regular para garantir eficiência e durabilidade do equipamento",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Manutenção Corretiva",
                        description: "Reparo rápido e eficiente de problemas em aparelhos de ar-condicionado",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Limpeza de Aparelhos",
                        description: "Limpeza completa e higienização de sistemas de climatização",
                    },
                },
            ],
        },
    },
};
