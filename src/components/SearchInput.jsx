import React, { useRef, useState } from "react";
import search from "../assets/images/icon-search.svg";
import { cn } from "@/lib/utils";

const SearchInput = ({ className }) => {
  const containerRef = useRef(null);
  const [isFocus, setIsFocus] = useState(false);

  const focusOnInput = () => {
    const container = containerRef.current;
    const input = container.querySelector("input");
    input.focus();
  };

  return (
    <div
      ref={containerRef}
      onClick={focusOnInput}
      className={cn(
        "radius-12 flex w-full cursor-text items-center gap-4 bg-neutral-800 px-6 py-4 hover:bg-neutral-700",
        className,
        isFocus
          ? "shadow-[0_0_0_3px_var(--neutral-900),_0_0_0_5px_var(--neutral-0)] hover:bg-neutral-800"
          : null,
      )}
    >
      <img src={search} width={20} alt="" aria-hidden="true" />
      <input
        type="search"
        placeholder="Search for a city, e.g., New York"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className="text-preset-5-medium w-full text-neutral-200 outline-none placeholder:text-neutral-200"
      />
    </div>
  );
};

export default SearchInput;
