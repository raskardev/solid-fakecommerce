import { Link } from "solid-app-router";
import { Component } from "solid-js";

export const Layout: Component = ({ children }) => {
  return (
    <div class="min-h-screen">
      <header class="flex justify-center items-center h-16 bg-blue-500 mb-8">
        <Link class="no-underline" href="/">
          <span class="text-xl text-white">Fake Commerce with Solid!</span>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};
