import { useEffect } from "react";
import type { SEOProps } from "./types";
import { SEO as SEO_CONSTANTS } from "../../../constants";

export const SEO: React.FC<SEOProps> = ({
    title,
    description = SEO_CONSTANTS.DEFAULT_DESCRIPTION,
    keywords = SEO_CONSTANTS.DEFAULT_KEYWORDS,
    image = `${SEO_CONSTANTS.SITE_URL}${SEO_CONSTANTS.IMAGES.OG_IMAGE}`,
    url = SEO_CONSTANTS.SITE_URL,
    type = "website",
    noindex = false,
    nofollow = false,
    canonicalUrl,
}) => {
    const pageTitle = title
        ? `${title} | ${SEO_CONSTANTS.SITE_NAME}`
        : SEO_CONSTANTS.DEFAULT_TITLE;

    const fullUrl = url.startsWith("http") ? url : `${SEO_CONSTANTS.SITE_URL}${url}`;
    const canonical = canonicalUrl || fullUrl;

    useEffect(() => {
        // Atualiza o título da página
        document.title = pageTitle;

        // Função helper para atualizar ou criar meta tags
        const updateMetaTag = (selector: string, attribute: string, content: string) => {
            let element = document.querySelector(selector);
            if (!element) {
                element = document.createElement("meta");
                document.head.appendChild(element);
            }
            element.setAttribute(attribute, content);
        };

        // Meta tags básicas
        updateMetaTag('meta[name="description"]', "content", description);
        updateMetaTag('meta[name="keywords"]', "content", keywords.join(", "));

        // Robots meta tags
        if (noindex || nofollow) {
            const robotsContent = [
                noindex ? "noindex" : "index",
                nofollow ? "nofollow" : "follow",
            ].join(", ");
            updateMetaTag('meta[name="robots"]', "content", robotsContent);
        }

        // Open Graph tags
        updateMetaTag('meta[property="og:title"]', "content", pageTitle);
        updateMetaTag('meta[property="og:description"]', "content", description);
        updateMetaTag('meta[property="og:image"]', "content", image);
        updateMetaTag('meta[property="og:url"]', "content", fullUrl);
        updateMetaTag('meta[property="og:type"]', "content", type);
        updateMetaTag('meta[property="og:site_name"]', "content", SEO_CONSTANTS.SITE_NAME);
        updateMetaTag('meta[property="og:locale"]', "content", "pt_BR");

        // Twitter Card tags
        updateMetaTag('meta[name="twitter:card"]', "content", "summary_large_image");
        updateMetaTag('meta[name="twitter:title"]', "content", pageTitle);
        updateMetaTag('meta[name="twitter:description"]', "content", description);
        updateMetaTag('meta[name="twitter:image"]', "content", image);

        // Canonical URL
        let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!linkCanonical) {
            linkCanonical = document.createElement("link");
            linkCanonical.setAttribute("rel", "canonical");
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.setAttribute("href", canonical);

        // Structured Data (JSON-LD)
        let scriptTag = document.querySelector('script[type="application/ld+json"]');
        if (!scriptTag) {
            scriptTag = document.createElement("script");
            scriptTag.setAttribute("type", "application/ld+json");
            document.head.appendChild(scriptTag);
        }
        scriptTag.textContent = JSON.stringify(SEO_CONSTANTS.STRUCTURED_DATA);
    }, [pageTitle, description, keywords, image, fullUrl, type, noindex, nofollow, canonical]);

    return null;
};
