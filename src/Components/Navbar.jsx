import Link from "next/link";
import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";

function Navbar() {
  return (
    <nav className="flex flex-col xl:flex-row  items-center justify-around py-8 text-white bg-neutral-900">
      <div>
        <Link href="/" className="text-2xl font-semibold  tracking-widest ">
          trendey
        </Link>
      </div>

      <div>
        <ul className="flex flex-col xl:flex-row items-center gap-5 uppercase ">
          <li>
            <Link
              href="/"
              className="font-light tracking-wider hover:text-[#FFF28D] transition-all delay-150 ease-in-out"
            >
              Home{" "}
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="font-light tracking-wider hover:text-[#FFF28D] transition-all delay-150 ease-in-out"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="font-light tracking-wider hover:text-[#FFF28D] transition-all delay-150 ease-in-out"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-light tracking-wider hover:text-[#FFF28D] transition-all delay-150 ease-in-out"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-4 ">
          <li>
            <Link href="/favlist">
              <MdFavoriteBorder size={20} />
            </Link>
          </li>
          <li>
            <Link href="/basket">
              <RiShoppingCart2Line size={20} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
