import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { AlignJustify } from "lucide-react";

const Header = () => {
  return (
    <nav className="flex bg-transparent justify-between px-16 py-8 fixed w-full">
      <Image src="/logo.png" alt="logo" width={100} height={30} />
      <div className="md:flex items-center space-x-10 hidden">
        <Link className="text-white" href="">
          Home
        </Link>
        <Link className="text-gray-300 hover:text-white" href="">
          About
        </Link>
        <Link className="text-gray-300 hover:text-white" href="">
          Services
        </Link>
        <Link className="text-gray-300 hover:text-white" href="">
          Pages
        </Link>
        <Link className="text-gray-300 hover:text-white" href="">
          Contact
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <Search color="white" />
        <AlignJustify color="white" />
      </div>
    </nav>
  );
};

export default Header;
