import React from "react";
import { Banner, ModerDivider, PageLayout, SEO } from "../../components";
import { ServicesSection } from "../../components/organisms/ServicesSection";
import { BrandsSection } from "../../components/organisms/BrandsSection";
import { HistorySection } from "../../components/organisms/HistorySection";
import { CatalogSection } from "../../components/organisms/CatalogSection";
import { TestimonialsSection } from "../../components/organisms/TestimonialsSection";
import { ContactSection } from "../../components/organisms/ContactSection";
import { Footer } from "../../components/organisms/Footer";

export const HomePage: React.FC = () => {
    return (
        <PageLayout>
            <SEO />
            <Banner />
            <ModerDivider />
            <ServicesSection />
            <BrandsSection />
            <HistorySection />
            <CatalogSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </PageLayout>
    );
};
