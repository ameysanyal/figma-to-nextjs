import React from "react";
import { ArrowRight } from "lucide-react";

interface btnProps {
  btnName: string;
  bgcolor: string;
}

const StyledButton: React.FC<btnProps> = ({ btnName, bgcolor }) => {
  if (bgcolor === "white")
    return (
      <button
        className={`flex items-center justify-center w-fit space-x-1 montserrat text-xs sm:text-lg  font-semibold bg-darkgreen text-white py-1 px-2 sm:py-2 sm:px-4 rounded-full hover:bg-white border border-darkgreen hover:text-darkgreen`}
      >
        <span>{btnName}</span>
        <ArrowRight />
      </button>
    );
  else if (bgcolor === "green")
    return (
      <button
        className={`flex items-center justify-center w-fit space-x-1 montserrat  text-xs sm:text-lg  font-semibold bg-white text-darkgreen py-1 px-2 sm:py-2 sm:px-4 rounded-full hover:bg-darkgreen border border-white hover:text-white`}
      >
        <span>{btnName}</span>
        <ArrowRight />
      </button>
    );
};

export default StyledButton;
