import React from "react";
import { Banner, ModerDivider, PageLayout } from "../../components";
import { ServicesSection } from "../../components/organisms/ServicesSection";
import { BrandsSection } from "../../components/organisms/BrandsSection";
import { HistorySection } from "../../components/organisms/HistorySection";
import { CatalogSection } from "../../components/organisms/CatalogSection";

export const HomePage: React.FC = () => {
    return (
        <PageLayout>
            <Banner />
            <ModerDivider />
            <ServicesSection />
            <BrandsSection />
            <HistorySection />
            <CatalogSection />
        </PageLayout>
    );
};
