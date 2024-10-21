import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

interface serviceCardProps {
  name: string;
  imageUrl: string | StaticImageData;
  description: string;
  serviceLink: string;
}

const ServiceCard: React.FC<serviceCardProps> = ({
  name,
  imageUrl,
  description,
  serviceLink,
}) => {
  return (
    <div className="relative flex flex-col">
      <Image
        alt={name}
        src={imageUrl}
        width={300}
        height={400}
        className="rounded-t-full w-auto max-w-xs sm:max-w-md"
      />
      <div className="w-[92%] absolute z-10 -bottom-24 left-2 sm:left-3 bg-white flex flex-col space-y-2 items-center p-4">
        <h3 className="text-darkgreen cormorant text-lg sm:text-2xl">{name}</h3>
        <p className="text-lightGreen w-128 text-center text-sm sm:text-md montserrat">
          {description}
        </p>
        <Link
          href={serviceLink}
          className="underline text-mediumgreen text-sm sm:text-md hover:scale-110"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
