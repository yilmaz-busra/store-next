"use client";
import { useBasket } from "@/context/basketContext";
import { useFav } from "@/context/favContext";
import { CiHeart } from "react-icons/ci";
import React from "react";

function ProductCard({ item }) {
  const { addItem } = useBasket();
  const { addFav } = useFav();
  return (
    <div className=" md:w-1/2 xl:w-1/4 p-4">
      <div className=" relative p-6 rounded-lg bg-[#F1F1F1]">
        <button
          className="absolute top-2 right-2"
          onClick={() => {
            addFav(item);
          }}
        >
          <CiHeart />
        </button>
        <img
          className="h-40 rounded w-full object-contain object-center mb-6"
          src={item.image}
          alt="content"
        />

        <div className="flex flex-wrap justify-between items-center w-full">
          <h2 className=" text-lg text-gray-900 font-medium title-font mb-4">
            {item.title.length > 30
              ? item.title.slice(0, 20) + "..."
              : item.title}
          </h2>
          <h3 className=" text-xs mb-2 font-medium title-font">{item.price}</h3>
        </div>

        <button
          className="w-full rounded-full  border-2  text-white bg-neutral-900 hover:bg-white hover:text-neutral-900 "
          onClick={() => {
            addItem(item);
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
