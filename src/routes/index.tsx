import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "../features/home";

export const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
};
