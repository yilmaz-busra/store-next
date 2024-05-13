"use client";
import React from "react";
import { useRouter } from "next/navigation";

function ProductAllCard({ item }) {
  const router = useRouter();
  return (
    <div
      className="xl:w-1/4 md:w-1/2  p-4 "
      onClick={() => router.push(`products/${item.id}`)}
    >
      <div class="p-6 rounded-lg">
        <div className="flex flex-col flex-wrap w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-contain object-center h-40 rounded  mb-6 w-full h-full "
              src={item.image}
            />
          </a>
          <div className="">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {item.category}
            </h3>
            <div className="flex flex-wrap justify-between items-center w-full">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {item.title.length > 30
                  ? item.title.slice(0, 20) + "..."
                  : item.title}
              </h2>
              <p className="mt-1">{item.price}</p>
            </div>
          </div>
        </div>
        <button className="w-full rounded-full border-2 mt-2 text-white bg-neutral-900 hover:bg-white hover:text-neutral-900 ">
          Buy
        </button>
      </div>
    </div>
  );
}

export default ProductAllCard;
