import React from "react";
import StyledButton from "./StyledButton";
import Image from "next/image";

const Subscribe = () => {
  return (
    <div className="h-[300px] flex flex-col items-center space-y-12 py-12 bg-[url('/bg-spa.jpg')]   bg-no-repeat bg-cover ">
      <div className="relative">
        <h1 className="cormorant text-3xl sm:text-5xl text-white text-center">
          Get the latest update about our
          <Image
            src="/ring.png"
            alt="heading"
            width={370}
            height={100}
            className="absolute w-40 top-[5px] right-20 sm:right-[15px] sm:md:right-[180px]"
          />
          <br /> products and services
        </h1>
      </div>

      <div className="flex relative bg-transparent rounded-full border border-white w-5/6 sm:w-1/2">
        <input
          type="email"
          className="bg-transparent outline-none w-3/4 h-[40px] sm:h-[55px] p-2 text-white text-lg"
          name="subscribe"
          id="subscribe"
        />
        <div className="absolute w-1/4 sm:top-[4px] sm:right-[20px] px-2 right-[45px] top-[3px]">
          <StyledButton bgcolor={"green"} btnName={"SUBSCRIBE"} />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
