import CardDailyForecast from "./card-daily-forecast";
import IconRain from "/images/icon-rain.webp";


const SectionDailyForecast = () => {
  return (
    <section className="mt-8">
      <div>
        <h3>Daily Forecast</h3>
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
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
  );
};

export default SectionDailyForecast;
