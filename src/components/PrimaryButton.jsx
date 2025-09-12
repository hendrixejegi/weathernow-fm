import React from "react";

const PrimaryButton = ({ children, className, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`text-neutral-0 radius-12 text-preset-5-medium flex cursor-pointer items-center justify-center bg-blue-500 px-6 py-4 hover:bg-blue-700 active:bg-blue-500 active:shadow-[0_0_0_3px_var(--neutral-900),_0_0_0_5px_var(--blue-500)] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
