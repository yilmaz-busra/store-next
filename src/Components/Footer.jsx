import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="grid grid-flow-col items-center p-3 bg-slate-500 ">
      <div className=" flex  justify-center ">
        <h3>Marka İsmi</h3>
      </div>
      <div className="flex gap-3 items-center justify-around">
        <ul>
          <li>
            <Link href="/">Company</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">Careers</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/">Community</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Forum</Link>
          </li>
          <li>
            <Link href="/">Help Center</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/">Legal</Link>
          </li>
          <li>
            <Link href="/">Terms of Service</Link>
          </li>
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
