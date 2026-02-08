import SectionDailyForecast from "./section-daily-forecast";
import SectionHourlyForecast from "./section-hourly-forecast";
import SectionWeatherCity from "./section-weather-city";

const Main = () => {
  return (
    <main className="space-y-8">
      <SectionWeatherCity />
      <SectionDailyForecast />
      <SectionHourlyForecast />
    </main>
  );
};

export default Main;
