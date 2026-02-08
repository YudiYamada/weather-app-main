import SectionDailyForecast from "./section-daily-forecast";
import SectionWeatherCity from "./section-weather-city";

const Main = () => {
  return (
    <main className="mt-8">
      <SectionWeatherCity />
      <SectionDailyForecast />
    </main>
  );
};

export default Main;
