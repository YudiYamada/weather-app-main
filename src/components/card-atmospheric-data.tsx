interface AtmosphericDataProps {
  title: string;
  value: string;
}

const CardAtmosphericData = ({ title, value }: AtmosphericDataProps) => {
  return (
    <div className="boder flex flex-col rounded-xl bg-neutral-600 p-5">
      <span className="mb-4 text-neutral-200">{title}</span>
      <span className="text-4xl">{value}</span>
    </div>
  );
};

export default CardAtmosphericData;
