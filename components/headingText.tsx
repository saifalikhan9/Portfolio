import React from "react";

const Heading = () => {
  return (
    <h1 className="relative  text-9xl font-extrabold dark:text-white leading-none tracking-widest my-4  ">
      <span className="block relative z-10">SAIF</span>
      {/* Bottom half */}
      <span className="absolute left-0 top-1/2 w-full h-1/2 overflow-hidden text-red-500">
        SAIF
      </span>
    </h1>
  );
};

export default Heading;
