import React from "react";
import { Banner, ModerDivider, PageLayout, SEO } from "../../components";
import { BrandsSection } from "../../components/organisms/BrandsSection";
import { ContactSection } from "../../components/organisms/ContactSection";
import { Footer } from "../../components/organisms/Footer";
import { HistorySection } from "../../components/organisms/HistorySection";
import { ServicesSection } from "../../components/organisms/ServicesSection";
import { TestimonialsSection } from "../../components/organisms/TestimonialsSection";

export const HomePage: React.FC = () => {
    return (
        <PageLayout>
            <SEO />
            <Banner />
            <ModerDivider />
            <ServicesSection />
            <BrandsSection />
            <HistorySection />
            {/* <CatalogSection /> */}
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </PageLayout>
    );
};
