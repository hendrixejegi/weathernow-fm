import React from "react";
import logo from "./assets/images/logo.svg";

import SearchInput from "./components/SearchInput";
import PrimaryButton from "./components/PrimaryButton";

import SettingsContainer from "./components/SettingsContainer";
import LeftContent from "./components/LeftContent";
import HourlyForecastContainer from "./components/HourlyForecastContainer";

export default function App() {
  return (
    <div className="mx-auto min-h-screen max-w-[1216px] p-4">
      <header className="mb-[var(--spacing-600)] flex items-center justify-between">
        <div>
          <img src={logo} width={137.9} height={28} alt="Weather now logo" />
        </div>
        <SettingsContainer />
      </header>

      <main className="space-y-[var(--spacing-600)]">
        <h1 className="text-preset-2 text-neutral-0 mx-auto text-center md:w-[482px] lg:w-full">
          How&#39;s the sky looking today?
        </h1>
        <SearchContainer />
        <ContentContainer />
      </main>
    </div>
  );
}

function SearchContainer() {
  return (
    <div className="mx-auto flex flex-col items-center space-y-[var(--spacing-150)] md:flex-row md:gap-4 md:space-y-0 lg:w-[656px]">
      <SearchInput className="md:grow" />
      <PrimaryButton className="w-full md:w-fit">Search</PrimaryButton>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="grid grid-cols-1 gap-8 space-y-8 lg:grid-cols-[1fr_384px]">
      <LeftContent />
      <HourlyForecastContainer />
    </div>
  );
}
