import React from "react";
import Image from "next/image";
import Link from "next/link";
import { aboutLinks, productLinks, supportLinks } from "@/lib/data";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-darkgreen w-full h-[780px] sm:h-[300px] flex flex-col  space-y-2 px-16">
      <div className="flex flex-col justify-center items-center space-y-4 sm:flex-row sm:space-x-32 sm:items-center">
        <div className="p-5 sm:p-8 flex flex-col items-center sm:items-start space-y-4">
          <Image src="/logo.png" alt="logo" width={100} height={30} />
          <p className="montserrat text-white w-64 sm:text-left text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis sed sapien in pretium.{" "}
          </p>
          <div className="flex space-x-4">
            <Link
              href=""
              className="bg-white hover:scale-110 text-darkgreen rounded-full p-1"
            >
              <Facebook />
            </Link>
            <Link
              href=""
              className="bg-white hover:scale-110 text-darkgreen rounded-full p-1"
            >
              <Twitter />
            </Link>
            <Link
              href=""
              className="bg-white hover:scale-110 text-darkgreen rounded-full p-1"
            >
              <Linkedin />
            </Link>
            <Link
              href=""
              className="bg-white hover:scale-110 text-darkgreen rounded-full p-1"
            >
              <Instagram />
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-white text-3xl cormorant">Products</h2>
          <ul className="space-y-2">
            {productLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white montserrat hover:underline"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-white text-3xl cormorant">About Us</h2>
          <ul className="space-y-2">
            {aboutLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white montserrat hover:underline"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-white text-3xl cormorant">Support</h2>
          <ul className="space-y-2">
            {supportLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white montserrat hover:underline"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="bg-white" />
      <p className="text-white montserrat text-center">
        Copyright © 2021 ASK Project
      </p>
    </footer>
  );
};

export default Footer;
