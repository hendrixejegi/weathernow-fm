import React from "react";

import arrow from "../assets/images/icon-dropdown.svg";
import sunny from "../assets/images/icon-sunny.webp";
import rain from "../assets/images/icon-drizzle.webp";
import fog from "../assets/images/icon-fog.webp";
import cloudy from "../assets/images/icon-partly-cloudy.webp";
import drizzle from "../assets/images/icon-rain.webp";
import snow from "../assets/images/icon-snow.webp";
import storm from "../assets/images/icon-storm.webp";
import overcast from "../assets/images/icon-overcast.webp";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const HourlyForecastContainer = () => {
  return (
    <div className="radius-20 space-y-4 bg-neutral-800 px-4 py-5">
      <div className="flex items-center justify-between">
        <h2 className="text-preset-5 text-neutral-0">Hourly Forecast</h2>
        <HourlyForecastDropdown />
      </div>
      <div className="space-y-4">
        <WeatherCard icon={overcast} time="3 PM" temperature={20} />
        <WeatherCard icon={overcast} time="4 PM" temperature={20} />
        <WeatherCard icon={sunny} time="5 PM" temperature={20} />
        <WeatherCard icon={overcast} time="6 PM" temperature={19} />
        <WeatherCard icon={snow} time="7 PM" temperature={18} />
        <WeatherCard icon={fog} time="8 PM" temperature={18} />
        <WeatherCard icon={snow} time="9 PM" temperature={17} />
        <WeatherCard icon={overcast} time="10 PM" temperature={17} />
      </div>
    </div>
  );
};

export default HourlyForecastContainer;

function HourlyForecastDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="dropdown-trigger bg-neutral-600 px-4 py-2">
        <span>Tuesday</span>
        <img src={arrow} width={9} height={14} alt="" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="dropdown-content"
        align="end"
        sideOffset={10}
      >
        <DropdownMenuLabel className="dropdown-label">
          Hourly forecast menu
        </DropdownMenuLabel>
        {weekdays.map((day, idx) => (
          <DropdownMenuItem key={idx} className="dropdown-menu-item">
            {day}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function WeatherCard({ icon, time, temperature }) {
  return (
    <div className="radius-8 flex items-center gap-2 border border-neutral-600 bg-neutral-700 px-3 py-2.5">
      <img src={icon} width={40} alt="" />
      <p className="flex grow items-center justify-between">
        <span className="text-preset-5 text-neutral-0">{time}</span>
        <span className="text-preset-7 text-neutral-0">
          {temperature}&#176;
        </span>
      </p>
    </div>
  );
}
