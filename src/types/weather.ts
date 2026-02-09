export interface WeatherData {
  city: string;
  country: string;
  current: {
    temp: number;
    humidity: number;
    windSpeed: number;
    feelsLike: number;
    isDay: number;
    code: number;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };
}

export interface GeoResponse {
  results?: Array<{
    name: string;
    country: string;
    latitude: number;
    longitude: number;
  }>;
}
