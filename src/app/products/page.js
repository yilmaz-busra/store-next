import ProductAllCard from "@/Components/ProductAllCard";
import React from "react";
import { allProducts } from "@/api/endpoint";

export default async function Products() {
  const products = await allProducts();
  return (
    <div className="flex flex-wrap p-8">
      {products.map((product) => {
        return (
          <ProductAllCard
            id={product.id}
            key={product.id}
            image={product.image}
            price={product.price}
            pname={product.title}
            category={product.category}
          />
        );
      })}
    </div>
  );
}
