interface CardHourlyForecastProps {
  icon: string; // URL da imagem ou componente de ícone
  iconDescription: string;
  time: string;
  temperature: string;
}

const CardHourlyForecast = ({
  icon,
  iconDescription,
  time,
  temperature,
}: CardHourlyForecastProps) => {
  return (
    <div className="flex w-full items-center justify-between rounded-xl border border-white/10 px-4 py-3">
      <div className="flex items-center gap-4">
        <img
          src={icon}
          alt={iconDescription}
          className="h-8 w-8 object-contain"
        />
        <span className="text-lg font-medium text-white uppercase">{time}</span>
      </div>

      <div className="text-xl font-semibold text-white">{temperature}</div>
    </div>
  );
};

export default CardHourlyForecast;
