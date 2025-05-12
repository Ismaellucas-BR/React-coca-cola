// src/Router.jsx
import React from "react";
import { Routes, Route } from "react-router";
import App from "./src/App";
import Brands from "./src/pages/brands/index";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/brands" element={<Brands />} />
  </Routes>
);
