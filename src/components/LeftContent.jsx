import React from "react";

import WeatherInfoContainer from "./LeftContent/WeatherInfoContainer";
import DailyForecastContainer from "./LeftContent/DailyForecastContainer";

const LeftContent = () => {
  return (
    <div className="lg: mb-5 justify-between lg:mb-0 lg:flex lg:flex-col">
      <WeatherInfoContainer />
      <DailyForecastContainer />
    </div>
  );
};

export default LeftContent;
