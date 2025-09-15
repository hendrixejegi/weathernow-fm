import React from "react";

import sunny from "../../assets/images/icon-sunny.webp";
import rain from "../../assets/images/icon-drizzle.webp";
import fog from "../../assets/images/icon-fog.webp";
import cloudy from "../../assets/images/icon-partly-cloudy.webp";
import drizzle from "../../assets/images/icon-rain.webp";
import snow from "../../assets/images/icon-snow.webp";
import storm from "../../assets/images/icon-storm.webp";
import overcast from "../../assets/images/icon-overcast.webp";
import { useLocationContext } from "@/context/LocationContext";

const WeatherInfoContainer = () => {
  return (
    <div className="mb-[var(--spacing-400)] lg:mb-12">
      <Info />
      <Details />
    </div>
  );
};

export default WeatherInfoContainer;

function Info() {
  const { address } = useLocationContext();

  return (
    <div className="radius-20 mb-[var(--spacing-250)] flex flex-col items-center justify-between gap-4 overflow-hidden bg-[url(/bg-today-small.svg)] bg-cover bg-center bg-no-repeat px-6 py-20 md:flex-row md:bg-[url(/bg-today-large.svg)] lg:mb-8">
      <div>
        <p className="text-preset-4 text-neutral-0 mb-3 text-center md:text-start">
          {address && `${address.city}, ${address.state}`}
        </p>
        <p className="text-preset-6 text-neutral-0 text-center md:text-start">
          Tuesday, Aug 5, 2025
        </p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <img src={sunny} width={120} alt="Sunny weather" />
        <p className="text-preset-1 text-neutral-0">20&#176;</p>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <DetailContainer name="Feels Like" value="18&#176;" />
      <DetailContainer name="Humidity" value="46%" />
      <DetailContainer name="Wind" value="14 km/h" />
      <DetailContainer name="Precipitation" value="0 mm" />
    </div>
  );
}

function DetailContainer({ name, value }) {
  return (
    <p className="radius-12 flex flex-col gap-6 border border-neutral-600 bg-neutral-800 p-5">
      <span className="text-preset-8 text-neutral-200">{name}</span>
      <span className="text-preset-3 text-neutral-0">{value}</span>
    </p>
  );
}
