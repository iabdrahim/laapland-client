import React from "react";

export const Button = ({ children, ...params }: any) => {
  return (
    <button
      {...params}
      className="bg-red-500 text-white rounded-md w-24 h-10 flex justify-center items-center p-2"
    >
      {children}
    </button>
  );
};
