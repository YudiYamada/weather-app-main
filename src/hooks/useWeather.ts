import { useState } from "react";
import { getCityCoordinates } from "../services/weather-service";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city: string) => {
    setLoading(true);
    const coords = await getCityCoordinates(city);
    setWeather(coords);
    setLoading(false);
  };

  return { weather, loading, fetchWeather };
};
