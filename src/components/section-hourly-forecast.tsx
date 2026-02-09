import CardHourlyForecast from "./card-hourly-forecast";
import DropdownDay from "./dropdown-day";

import IconSunny from "/images/icon-sunny.webp";

const SectionHourlyForecast = () => {
  return (
    <section className="rounded-xl bg-neutral-600 p-5">
      <div className="flex justify-between items-center">
        <h5>Hourly forecast</h5>
        <DropdownDay />
      </div>
      
      <div className="flex flex-col items-center space-y-5 mt-3 overflow-y-auto h-172">
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="12 AM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="01 AM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="02 AM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="03 AM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="04 AM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="05 AM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="06 AM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="07 AM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="08 AM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="09 AM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="10 AM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="11 AM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="12 PM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="01 PM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="02 PM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="03 PM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="04 PM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="05 PM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="06 PM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="07 PM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="08 PM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="09 PM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="10 PM"
          temperature="68º"
        />
        <CardHourlyForecast
          icon={IconSunny}
          iconDescription="Icon Sunny"
          time="11 PM"
          temperature="68º"
        />
      </div>
    </section>
  );
};

export default SectionHourlyForecast;
