import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Slide {
  name: string;
  imageUrl: string | StaticImageData;
}

interface Review {
  name: string;
  review: string;
}

interface HorizontalScrollerProps {
  slides?: Slide[];
  reviews?: Review[];
  type: "slides" | "reviews" | "squareImages"; // Add type prop to differentiate
}

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  slides = [],
  reviews = [],
  type,
}) => {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex animate-scroll">
        {/* Render slides or reviews based on type */}
        {type === "slides" &&
          [...slides, ...slides].map((slide, index) => (
            <div key={index} className="mx-2 min-w-[200px] md:min-w-[300px]">
              <Image
                src={slide.imageUrl}
                alt={slide.name}
                width={300}
                height={200}
                className="rounded-t-full"
              />
            </div>
          ))}

        {type === "reviews" &&
          reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col justify-center space-y-2 mx-2 min-w-[200px] md:min-w-[300px]"
            >
              <p className="montserrat text-white">{review.review}</p>
              <p className="Cormorant text-white">- {review.name}</p>
            </div>
          ))}

        {type === "squareImages" &&
          [...slides, ...slides].map((slide, index) => (
            <div
              key={index}
              className="flex  items-center min-w-[200px] md:min-w-[300px]"
            >
              <Image
                src={slide.imageUrl}
                alt={slide.name}
                width={300}
                height={200}
                className="w-32 h-8  sm:w-52 sm:h-12"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HorizontalScroller;
