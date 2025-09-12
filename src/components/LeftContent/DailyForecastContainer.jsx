import React from "react";

import sunny from "../../assets/images/icon-sunny.webp";
import rain from "../../assets/images/icon-drizzle.webp";
import fog from "../../assets/images/icon-fog.webp";
import cloudy from "../../assets/images/icon-partly-cloudy.webp";
import drizzle from "../../assets/images/icon-rain.webp";
import snow from "../../assets/images/icon-snow.webp";
import storm from "../../assets/images/icon-storm.webp";
import overcast from "../../assets/images/icon-overcast.webp";

const DailyForecastContainer = () => {
  return (
    <div>
      <h2 className="text-preset-5 text-neutral-0">Daily forecast</h2>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-7">
        <DailyForecast day="Tue" icon={drizzle} range={[20, 14]} />
        <DailyForecast day="Wed" icon={rain} range={[21, 15]} />
        <DailyForecast day="Thu" icon={sunny} range={[24, 14]} />
        <DailyForecast day="Fri" icon={cloudy} range={[25, 13]} />
        <DailyForecast day="Sat" icon={storm} range={[21, 15]} />
        <DailyForecast day="Sun" icon={snow} range={[25, 16]} />
        <DailyForecast day="Mon" icon={fog} range={[24, 15]} />
      </div>
    </div>
  );
};

export default DailyForecastContainer;

function DailyForecast({ day, icon, range }) {
  return (
    <div className="radius-12 place-items-center space-y-4 border border-neutral-600 bg-neutral-800 px-2.5 py-4">
      <p className="text-preset-6 text-neutral-0">{day}</p>
      <img src={icon} width={60} />
      <p className="text-preset-7 flex w-full items-center justify-between text-neutral-200">
        <span>{range[0]}&#176;</span>
        <span>{range[1]}&#176;</span>
      </p>
    </div>
  );
}
