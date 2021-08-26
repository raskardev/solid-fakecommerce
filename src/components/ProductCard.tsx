import { Link } from "solid-app-router";
import { Component } from "solid-js";
import { Product } from "../types";

export const ProductCard: Component<{ product: Product }> = ({ product }) => {
  return (
    <Link class="no-underline text-black" href={`/product/${product.id}`}>
      <div class="flex flex-col m-4 pt-4 pb-2 px-4 border border-gray-200 cursor-pointer">
        <div class="flex justify-center items-center pb-8">
          <img
            class="w-32 h-32 rounded-lg p-2"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-2xl pb-4">{product.title}</h1>
          <p>{product.description}</p>
        </div>
      </div>
    </Link>
  );
};
