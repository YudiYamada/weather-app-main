import CardAtmosphericData from "./card-atmospheric-data";
import CardWeatherCity from "./card-weather-city";

const SectionWeatherCity = () => {
  return (
    <section>
      <CardWeatherCity />
      <div className="mt-6 grid grid-cols-2 gap-4">
        <CardAtmosphericData title="Feels Like" value="64º" />
        <CardAtmosphericData title="Humidity" value="46%" />
        <CardAtmosphericData title="Wind" value="9 mph" />
        <CardAtmosphericData title="Precipitations" value="0 in" />
      </div>
    </section>
  );
};

export default SectionWeatherCity;
