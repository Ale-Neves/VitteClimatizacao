import { useEffect } from "react";
import type { SEOProps } from "../components/atoms/SEO/types";
import { SEO } from "../constants";

/**
 * Hook para gerenciar SEO de páginas individuais
 * 
 * @example
 * ```tsx
 * function ServicesPage() {
 *   useSEO({
 *     title: "Nossos Serviços",
 *     description: "Conheça todos os serviços...",
 *     keywords: ["serviços", "instalação"]
 *   });
 *   
 *   return <div>...</div>;
 * }
 * ```
 */
export const useSEO = (props: Omit<SEOProps, "children">) => {
    const {
        title,
        description = SEO.DEFAULT_DESCRIPTION,
        keywords = SEO.DEFAULT_KEYWORDS,
        image = `${SEO.SITE_URL}${SEO.IMAGES.OG_IMAGE}`,
        url = SEO.SITE_URL,
        type = "website",
        noindex = false,
        nofollow = false,
        canonicalUrl,
    } = props;

    const pageTitle = title ? `${title} | ${SEO.SITE_NAME}` : SEO.DEFAULT_TITLE;
    const fullUrl = url.startsWith("http") ? url : `${SEO.SITE_URL}${url}`;
    const canonical = canonicalUrl || fullUrl;

    useEffect(() => {
        // Atualiza o título
        document.title = pageTitle;

        // Helper para atualizar meta tags
        const updateMeta = (selector: string, attr: string, content: string) => {
            let el = document.querySelector(selector);
            if (!el) {
                el = document.createElement("meta");
                document.head.appendChild(el);
            }
            el.setAttribute(attr, content);
        };

        // Meta tags básicas
        updateMeta('meta[name="description"]', "content", description);
        updateMeta('meta[name="keywords"]', "content", Array.isArray(keywords) ? keywords.join(", ") : keywords);

        // Robots
        if (noindex || nofollow) {
            const robotsContent = [noindex ? "noindex" : "index", nofollow ? "nofollow" : "follow"].join(", ");
            updateMeta('meta[name="robots"]', "content", robotsContent);
        }

        // Open Graph
        updateMeta('meta[property="og:title"]', "content", pageTitle);
        updateMeta('meta[property="og:description"]', "content", description);
        updateMeta('meta[property="og:image"]', "content", image);
        updateMeta('meta[property="og:url"]', "content", fullUrl);
        updateMeta('meta[property="og:type"]', "content", type);

        // Twitter
        updateMeta('meta[name="twitter:title"]', "content", pageTitle);
        updateMeta('meta[name="twitter:description"]', "content", description);
        updateMeta('meta[name="twitter:image"]', "content", image);

        // Canonical
        let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!link) {
            link = document.createElement("link");
            link.rel = "canonical";
            document.head.appendChild(link);
        }
        link.href = canonical;
    }, [pageTitle, description, keywords, image, fullUrl, type, noindex, nofollow, canonical]);
};
