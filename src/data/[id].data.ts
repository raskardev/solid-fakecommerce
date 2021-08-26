import { RouteDataFunc } from "solid-app-router";
import { createResource } from "solid-js";
import { Product } from "../types";

const ProductData: RouteDataFunc = ({ params }) => {
  const { id } = params;
  const [product] = createResource<Product>(() =>
    fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
  );

  return product;
};

export default ProductData;
