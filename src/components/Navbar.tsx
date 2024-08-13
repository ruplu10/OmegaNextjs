import Link from "next/link";
import Image from "next/image";
import React from "react";
import { NAV_LINKS } from "../../constants";

const Navbar = () => {
  return (
    <nav className="navbars sectionGap cusContainer">
     {/*  <div className="image">
        <Image src="/logo.png" alt="logo" width={200} height={120}></Image>
      </div> */}
      <ul className="nav-link">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="regular-16 flexCenter cursor-pointer pb-2 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
