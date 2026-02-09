import { useState } from "react";
import type { WeatherData, GeoResponse } from "../types/weather";

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const geoUrl = import.meta.env.VITE_GEO_API_URL;
  const weatherUrl = import.meta.env.VITE_WEATHER_API_URL;

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError(null);

    try {
      // 1. Geocoding
      const geoRes = await fetch(
        `${geoUrl}?name=${city}&count=1&language=pt&format=json`,
      );
      const geoData: GeoResponse = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("Cidade não encontrada");
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // 2. Weather Forecast
      const weatherRes = await fetch(
        `${weatherUrl}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`,
      );

      if (!weatherRes.ok) throw new Error("Erro ao buscar dados do clima");

      const data = await weatherRes.json();
      console.log(data)

      setWeatherData({
        city: name,
        country: country,
        current: {
          temp: data.current.temperature_2m,
          humidity: data.current.relative_humidity_2m,
          windSpeed: data.current.wind_speed_10m,
          feelsLike: data.current.apparent_temperature,
          isDay: data.current.is_day,
          code: data.current.weather_code,
        },
        daily: data.daily,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, loading, error, fetchWeather };
};
