import React from "react";

interface ButtonProps {
  btnText: string;
  handleClick: () => void;
  icon?: any;
  classStyle?: string;
}

function Button({ btnText, handleClick, icon, classStyle }: ButtonProps) {
  return (
    <button
      className={`bg-gray-500 flex items-center text-white rounded-full py-3 cursor-pointer gap-2 hover:bg-gray-700 px-5 text-sm font-bold ${classStyle}`}
      onClick={handleClick}
    >
      {icon}
      {btnText}
    </button>
  );
}

export default Button;
