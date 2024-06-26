import React from "react";

const CTA = ({ text }: { text: string }) => {
  return (
    <button className=" bg-gradient-to-b from-[#287CF9] to-[#0A27BD] font-inter h-full py-[0.8vmin] px-[0.8vmax] rounded-full text-base font-light">
      {text}
    </button>
  );
};

export default CTA;
