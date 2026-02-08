import SectionDailyForecast from "./section-daily-forecast";
import SectionHourlyForecast from "./section-hourly-forecast";
import SectionWeatherCity from "./section-weather-city";

const Main = () => {
  return (
    <main className="mt-5 gap-10 max-w-7xl mx-auto space-y-8 lg:grid lg:grid-cols-3">
      <div className="lg:col-span-2">
        <SectionWeatherCity />
        <SectionDailyForecast />
      </div>
      <div className="lg:col-span-1">
        <SectionHourlyForecast />
      </div>
    </main>
  );
};

export default Main;
