import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "../features/home";
import { ShopPage } from "../features/shop";

export const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/loja" element={<ShopPage />} />
            </Routes>
        </Router>
    );
};
