import { Route, Routes } from "solid-app-router";
import { Component, lazy } from "solid-js";
import { Layout } from "./components/Layout";

import HomeData from "./data/home.data";
import ProductData from "./data/[id].data";

const HomePage = lazy(() => import("./pages/Home"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetail"));

const App: Component = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} data={HomeData} />
        <Route
          path="/product/:id"
          element={<ProductDetailPage />}
          data={ProductData}
        />
      </Routes>
    </Layout>
  );
};

export default App;
