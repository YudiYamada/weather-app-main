const GEO_URL = import.meta.env.VITE_GEO_API_URL;
const WEATHER_URL = import.meta.env.VITE_WEATHER_API_URL;

export const getCityCoordinates = async (city: string) => {
  const response = await fetch(`${GEO_URL}?name=${city}&count=1&language=en`);
  const data = await response.json();
  console.log("Dados do Geocoding", data);
  return data.results?.[0];
};

export const getWeatherData = async (lat: number, lon: number) => {
  const response = await fetch(
    `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,weather_code`
  );
  const data = await response.json();
  console.log("Dados do Clima:", data);
  return data;
};