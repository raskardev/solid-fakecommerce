import { useData } from "solid-app-router";
import { Component, Resource, Show } from "solid-js";
import { Product } from "../types";

const ProductDetailPage: Component = () => {
  const product = useData<Resource<Product>>();

  return (
    <Show when={product()} fallback={<h1>Loading...</h1>}>
      <div class="flex">
        <div class="px-4 mr-4">
          <img src={product().image} />
        </div>
        <div class="p-4">
          <h1 class="text-3xl mb-11">
            {product().title} - {product().price}€
          </h1>
          <p>{product().description}</p>
          <button class="bg-teal-500 p-4 mt-8 text-white rounded-md transition-colors hover:bg-teal-900">
            Add to cart!
          </button>
        </div>
      </div>
    </Show>
  );
};

export default ProductDetailPage;
