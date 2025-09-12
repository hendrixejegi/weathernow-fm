import React from "react";

import WeatherInfoContainer from "./LeftContent/WeatherInfoContainer";
import DailyForecastContainer from "./LeftContent/DailyForecastContainer";

const LeftContent = () => {
  return (
    <div className="mb-5 lg:mb-0">
      <WeatherInfoContainer />
      <DailyForecastContainer />
    </div>
  );
};

export default LeftContent;
