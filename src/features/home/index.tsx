import React from "react";
import { Banner, ModerDivider, PageLayout } from "../../components";
import { ServicesSection } from "../../components/organisms/ServicesSection";
import { BrandsSection } from "../../components/organisms/BrandsSection";
import { HistorySection } from "../../components/organisms/HistorySection";

export const HomePage: React.FC = () => {
    return (
        <PageLayout>
            <Banner />
            <ModerDivider />
            <ServicesSection />
            <BrandsSection />
            <HistorySection />
        </PageLayout>
    );
};
