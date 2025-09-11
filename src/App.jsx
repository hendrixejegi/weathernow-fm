import React from "react";
import PrimaryButton from "./components/PrimaryButton";
import SearchInput from "./components/SearchInput";
import MenuItem from "./components/MenuItem";

export default function App() {
  return (
    <div className="text-preset-2 radius-full m-2 p-6 font-bold">
      APP
      <PrimaryButton>button</PrimaryButton>
      <SearchInput />
      <MenuItem>Menu</MenuItem>
    </div>
  );
}
