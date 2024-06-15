"use client";
import React from "react";
import ProductAllCard from "@/Components/ProductAllCard";
import { useFav } from "@/context/favContext";
function FavList() {
  const { fav, removeFav } = useFav();
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Your Favourites
            </h1>
          </div>
          <div className=" w-full flex flex-wrap mx-auto justify-center items-center">
            {fav.map((item) => (
              <ProductAllCard item={item} key={item.id} isFav={true} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FavList;
