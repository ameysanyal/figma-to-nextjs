import React from "react";
import StyledButton from "./StyledButton";
import Image from "next/image";

const OurStory = () => {
  return (
    <div className="bg-darkgreen w-96 h-96  z-20 flex flex-col space-y-4 p-10">
      <h2 className="text-white cormorant relative text-5xl">
        Our Story
        <Image
          src="/line.png"
          alt="heading"
          width={370}
          height={100}
          className="absolute w-32 top-[45px] left-[20px] sm:left-[80px]"
        />
      </h2>
      <p className="montserrat text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada
        orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non
        maximus.
      </p>
      <StyledButton bgcolor="green" btnName="READ MORE" />
    </div>
  );
};

export default OurStory;
