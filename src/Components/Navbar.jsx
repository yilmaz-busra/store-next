import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-around py-5 bg-cyan-600">
      <div>
        <h3>Marka İsmi</h3>
      </div>

      <div>
        <ul className=" flex items-center gap-3">
          <li>
            <Link
              href="/"
              className="hover:text-slate-200 transition-all delay-150 ease-in-out"
            >
              Ana Sayfa{" "}
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-slate-200 transition-all delay-150 ease-in-out"
            >
              Ürünler
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-slate-200 transition-all delay-150 ease-in-out"
            >
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-slate-200 transition-all delay-150 ease-in-out"
            >
              İletişim
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-2">
          <li>
            <Link href="/favlist">fav</Link>
          </li>
          <li>
            <Link href="/basket">Sepet</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
