export interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: "website" | "article" | "product";
    noindex?: boolean;
    nofollow?: boolean;
    canonicalUrl?: string;
}
