interface CardDailyForecastProps {
  day: string;
  icon: string;
  icondescription: string;
  temp1: string;
  temp2: string;
}

const CardDailyForecast = ({
  day,
  icon,
  icondescription,
  temp1,
  temp2,
}: CardDailyForecastProps) => {
  return (
    <div className="flex h-40 w-26 flex-col items-center rounded-xl bg-neutral-600 p-3">
      <span>{day}</span>
      <img src={icon} alt={icondescription} />
      <div className="flex justify-between w-full">
        <span>{temp1}</span>
        <span>{temp2}</span>
      </div>
    </div>
  );
};

export default CardDailyForecast;
