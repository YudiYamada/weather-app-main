import CardAtmosphericData from "./card-atmospheric-data";
import CardWeatherCIty from "./card-weather-city";

const Main = () => {
  return (
    <main className="mt-8">
      <section>
        <CardWeatherCIty />
        <div className="grid grid-cols-2 gap-4 mt-6">
          <CardAtmosphericData title="Feels Like" value="64º" />
          <CardAtmosphericData title="Humidity" value="46%" />
          <CardAtmosphericData title="Wind" value="9 mph" />
          <CardAtmosphericData title="Precipitations" value="0 in" />
        </div>
      </section>
    </main>
  );
};

export default Main;
