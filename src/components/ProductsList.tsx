import { Component, createResource, For, Resource } from "solid-js";
import { Product } from "../types";
import { ProductCard } from "./ProductCard";

export const ProductsList: Component<{ products: Resource<Product[]> }> = ({
  products,
}) => {
  return (
    <div class="flex flex-col">
      <div class="grid <sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        <For each={products()}>
          {(product) => <ProductCard product={product} />}
        </For>
      </div>
    </div>
  );
};
