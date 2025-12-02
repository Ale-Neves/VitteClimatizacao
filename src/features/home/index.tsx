import React from "react";
import { Banner, ModerDivider, PageLayout } from "../../components";
import { ServicesSection } from "../../components/organisms/ServicesSection";

export const HomePage: React.FC = () => {
    return (
        <PageLayout>
            <Banner />
            <ModerDivider />
            <ServicesSection />
        </PageLayout>
    );
};
