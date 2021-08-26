import { useData } from "solid-app-router";
import { Component, Resource } from "solid-js";
import { ProductsList } from "../components/ProductsList";
import { Product } from "../types";

const Home: Component = () => {
  const products = useData<Resource<Product[]>>();

  return (
    <div class="flex flex-col">
      <ProductsList products={products} />
    </div>
  );
};

export default Home;
