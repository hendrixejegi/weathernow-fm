import React, { useContext, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { offset, useFloating } from "@floating-ui/react";

import search from "../assets/images/icon-search.svg";
import { LocationContext } from "@/context/LocationContext";

const SearchInput = ({ className, value, results, ...restProps }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef(null);
  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom-start",
    middleware: [offset(10)],
  });

  const focusOnInput = () => {
    const container = containerRef.current;
    const input = container.querySelector("input");
    input.focus();
  };

  const { setPosition, setAddress } = useContext(LocationContext);

  const handleFocus = () => {
    setIsFocus(true);
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
    setIsOpen(false);
  };

  const handleClick = (city) => {
    setPosition({ lat: city.latitude, lon: city.longitude });
    setAddress({ city: city.name, state: city.admin1 });
    setIsOpen(false); // close after clicking a result
  };

  return (
    <>
      <div
        ref={(node) => {
          containerRef.current = node;
          refs.setReference(node);
        }}
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
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          className="text-preset-5-medium w-full text-neutral-200 outline-none placeholder:text-neutral-200"
          {...restProps}
        />
      </div>

      {isOpen && Array.isArray(results) && results.length > 0 && value ? (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="radius-12 w-full max-w-[526px] space-y-1.5 border border-neutral-700 bg-neutral-800 p-2"
        >
          {results.map((city, idx) => (
            <button
              key={idx}
              className="radius-8 text-neutral-0 text-preset-7 w-full cursor-pointer border border-transparent px-2 py-2.5 text-start hover:border-neutral-600 hover:bg-neutral-700"
              onMouseDown={() => handleClick(city)}
            >
              {city.name}, {city.admin1}
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default SearchInput;
