import React from "react";

function ProductCard({ image, price, pname }) {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div class="bg-[#F1F1F1] p-6 rounded-lg">
        <img
          className="h-40 rounded w-full object-contain object-center mb-6"
          src={image}
          alt="content"
        />

        <div className="flex flex-wrap justify-between items-center w-full">
          <h2 className=" text-lg text-gray-900 font-medium title-font mb-4">
            {pname.length > 30 ? pname.slice(0, 20) + "..." : pname}
          </h2>
          <h3 className=" text-xs mb-2 font-medium title-font">{price}</h3>
        </div>

        <button className="w-full rounded-full  border-2  text-white bg-neutral-900 hover:bg-white hover:text-neutral-900 ">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
