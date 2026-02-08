import CardAtmosphericData from "./card-atmospheric-data";
import CardDailyForecast from "./card-daily-forecast";
import CardWeatherCIty from "./card-weather-city";
import IconRain from "/images/icon-rain.webp";

const Main = () => {
  return (
    <main className="mt-8">
      <section>
        <CardWeatherCIty />
        <div className="mt-6 grid grid-cols-2 gap-4">
          <CardAtmosphericData title="Feels Like" value="64º" />
          <CardAtmosphericData title="Humidity" value="46%" />
          <CardAtmosphericData title="Wind" value="9 mph" />
          <CardAtmosphericData title="Precipitations" value="0 in" />
        </div>
      </section>

      <section className="mt-8">
        <div>
          <h3>Daily Forecast</h3>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-4">
          <CardDailyForecast
            day="Tue"
            icon={IconRain}
            icondescription="Icon Rain"
            temp1="68º"
            temp2="57º"
          />

          <CardDailyForecast
            day="Tue"
            icon={IconRain}
            icondescription="Icon Rain"
            temp1="68º"
            temp2="57º"
          />

          <CardDailyForecast
            day="Tue"
            icon={IconRain}
            icondescription="Icon Rain"
            temp1="68º"
            temp2="57º"
          />

          <CardDailyForecast
            day="Tue"
            icon={IconRain}
            icondescription="Icon Rain"
            temp1="68º"
            temp2="57º"
          />

          <CardDailyForecast
            day="Tue"
            icon={IconRain}
            icondescription="Icon Rain"
            temp1="68º"
            temp2="57º"
          />

          <CardDailyForecast
            day="Tue"
            icon={IconRain}
            icondescription="Icon Rain"
            temp1="68º"
            temp2="57º"
          />

          <CardDailyForecast
            day="Tue"
            icon={IconRain}
            icondescription="Icon Rain"
            temp1="68º"
            temp2="57º"
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
