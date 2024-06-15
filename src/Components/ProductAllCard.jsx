"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useBasket } from "@/context/basketContext";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";
import { useFav } from "@/context/favContext";

function ProductAllCard({ item, isFav = false }) {
  const router = useRouter();
  const { addItem } = useBasket();
  const { addFav, removeFav } = useFav();
  return (
    <div className="md:w-1/2 xl:w-1/4   p-4 ">
      <div className=" relative p-6 rounded-lg">
        {isFav === false ? (
          <button
            className="absolute top-2 right-2"
            onClick={() => {
              addFav(item);
            }}
          >
            <CiHeart />
          </button>
        ) : (
          <button
            className="absolute top-2 right-2"
            onClick={() => {
              removeFav(item.id);
            }}
          >
            <MdOutlineCancel />
          </button>
        )}
        <div
          className="flex flex-col flex-wrap w-full"
          onClick={() => router.push(`products/${item.id}`)}
        >
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
        <button
          className="w-full rounded-full border-2 mt-2 text-white bg-neutral-900 hover:bg-white hover:text-neutral-900 "
          onClick={() => {
            addItem(item);
          }}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default ProductAllCard;
