import { useState, useEffect } from "react";
import Button from "./button";
import Input from "./input";
import SectionDailyForecast from "./section-daily-forecast";
import SectionHourlyForecast from "./section-hourly-forecast";
import SectionWeatherCity from "./section-weather-city";
import IconSearch from "../assets/icon-search.svg";
import Error from "./error";

// Importando os serviços e os tipos
import {
  getCityCoordinates,
  getWeatherData,
} from "../services/weather-service";
import type { WeatherData } from "../types/weather";

interface GeoCity {
  name: string;
  country: string;
}

const Main = () => {
  const [hasError, setHasError] = useState(false);
  const [hasResults, setHasResults] = useState(true);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Estado para guardar os dados finais do clima
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  // Lógica de Debounce para sugestões enquanto digita
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (search.length < 3) {
        setSuggestions([]);
        return;
      }

      try {
        const response = await fetch(
          `${import.meta.env.VITE_GEO_API_URL}?name=${search}&count=5&language=en`,
        );
        const data = await response.json();

        if (data.results) {
          const cityNames = data.results.map(
            (city: GeoCity) => `${city.name}, ${city.country}`,
          );
          setSuggestions(cityNames);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Erro ao buscar sugestões", error);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  // Função principal disparada pelo botão ou "Enter"
  const handleSearch = async () => {
    if (!search) return;

    try {
      setHasError(false);

      // 1. Busca as coordenadas
      const coords = await getCityCoordinates(search);

      if (coords) {
        setHasResults(true);
        setSuggestions([]); // Limpa sugestões ao confirmar a busca

        // 2. Busca o clima real usando lat/lon das coordenadas
        const rawWeather = await getWeatherData(
          coords.latitude,
          coords.longitude,
        );

        // 3. Monta o objeto seguindo a sua interface WeatherData
        const formattedData: WeatherData = {
          city: coords.name,
          country: coords.country,
          current: {
            temp: rawWeather.current_weather.temperature,
            humidity: rawWeather.hourly.relative_humidity_2m[0], // Pegando o primeiro valor da lista
            windSpeed: rawWeather.current_weather.windspeed,
            feelsLike: rawWeather.hourly.temperature_2m[0],
            isDay: rawWeather.current_weather.is_day,
            code: rawWeather.current_weather.weathercode,
            precipitation: rawWeather.hourly.precipitation_sum
              ? rawWeather.hourly.precipitation_sum[0]
              : 0,
          },
          daily: rawWeather.daily,
          hourly: rawWeather.hourly,
        };

        // 4. Salva no estado (por enquanto só logamos para conferir)
        setWeatherData(formattedData);
        console.log("Dados do clima prontos e guardados:", formattedData);
      } else {
        setHasResults(false);
        setWeatherData(null);
      }
    } catch (error) {
      setHasError(true);
      console.error("Erro na busca principal:", error);
    }
  };

  const handleSuggestionClick = (cityName: string) => {
    setSearch(cityName);
    setSuggestions([]);
  };

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
                value={search}
                suggestions={suggestions}
                onChange={(e) => setSearch(e.target.value)}
                onSuggestionClick={handleSuggestionClick}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />
              <Button onClick={handleSearch}>Search</Button>
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
