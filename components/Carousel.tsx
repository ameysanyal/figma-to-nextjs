"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { StaticImageData } from "next/image";

const Carousel: React.FC<{
  slides: { name: string; imageUrl: string | StaticImageData }[];
}> = ({ slides }) => {
  const [current, setCurrent] = useState<number>(2); // Start from the 1st original image
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Duplicate slides to make an infinite loop
  const totalSlides = slides.length;
  // const extendedSlides = [
  //   ...slides.slice(-2), // Last 2 slides at the beginning
  //   ...slides,
  //   ...slides.slice(0, 2), // First 2 slides at the end
  // ];

  // Auto-scroll logic
  useEffect(() => {
    const autoScroll = setInterval(() => {
      nextSlide();
    }, 2000); // Change image every 3 seconds

    return () => {
      clearInterval(autoScroll);
    };
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (current === 0) {
      // Reset to the last original slide when scrolling back from the cloned slides
      setIsTransitioning(false);
      setCurrent(totalSlides);
    } else if (current === totalSlides + 2) {
      // Reset to the first original slide when reaching the cloned slides at the end
      setIsTransitioning(false);
      setCurrent(2);
    } else {
      setIsTransitioning(true);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50); // Short delay to disable transition
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <>
      <div className="relative overflow-hidden w-[650px]">
        {" "}
        {/* Adjust width for two images */}
        <div
          ref={carouselRef}
          className={`flex space-x-2 transition-transform ease-out duration-500 ${
            !isTransitioning ? "transition-none" : ""
          }`}
          style={{
            transform: `translateX(-${current * 310}px)`, // Adjust width per image
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {[...slides, ...slides].map((s, index) => {
            return (
              <Image
                alt={s.name}
                key={index}
                src={s.imageUrl}
                width={300}
                height={400}
                className="rounded-t-full"
              />
            );
          })}
        </div>
      </div>
      <div className="py-2 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => setCurrent(i + 2)} // Adjust index to account for cloned slides
              key={"circle" + i}
              className={`rounded-full w-3 h-3 cursor-pointer ${
                i + 2 === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
