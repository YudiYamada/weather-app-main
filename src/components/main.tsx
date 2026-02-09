import Button from "./button";
import Input from "./input";
import SectionDailyForecast from "./section-daily-forecast";
import SectionHourlyForecast from "./section-hourly-forecast";
import SectionWeatherCity from "./section-weather-city";
import IconSearch from "../assets/icon-search.svg";
import { useState } from "react";
import Error from "./error";

const Main = () => {
  const [hasError, setHasError] = useState(false);
  const [hasResults, setHasResults] = useState(true);

  return (
    <main>
      {hasError ? (
        <Error />
      ) : (
        <>
          <div className="mt-3 flex flex-col items-center">
            <div>
              <h1 className="text-center text-5xl">
                How's the sky looking today?
              </h1>
            </div>
            <div className="mt-10 flex w-full flex-col gap-4 md:w-150 md:flex-row">
              <Input
                icon={IconSearch}
                type="text"
                placeholder="Search for a place..."
              />
              <Button>Search</Button>
            </div>
          </div>

          {!hasResults ? (
            <h1 className="mt-5 text-center text-3xl">
              No search result found!
            </h1>
          ) : (
            <>
              <div className="mx-auto mt-5 max-w-7xl gap-10 space-y-8 lg:grid lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <SectionWeatherCity />
                  <SectionDailyForecast />
                </div>
                <div className="lg:col-span-1">
                  <SectionHourlyForecast />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </main>
  );
};

export default Main;
