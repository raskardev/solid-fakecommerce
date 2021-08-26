import { RouteDataFunc } from "solid-app-router";
import { createResource } from "solid-js";
import { Product } from "../types";

const HomeData: RouteDataFunc = () => {
  const [products] = createResource<Product[]>(
    () => fetch("https://fakestoreapi.com/products").then((res) => res.json()),
    {
      initialValue: [],
    }
  );

  return products;
};

export default HomeData;
