"use client";
import { useBasket } from "@/context/basketContext";

function Basket() {
  const { basket } = useBasket();
  return (
    <div>
      <h3>Your Basket</h3>
    </div>
  );
}

export default Basket;
