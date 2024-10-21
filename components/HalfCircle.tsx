import React from "react";

const HalfCircle: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div
      className={`rounded-t-full w-64 h-32`}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default HalfCircle;
