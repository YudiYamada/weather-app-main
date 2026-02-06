interface AtmosphericDataProps {
  title: string;
  value: string;
}

const CardAtmosphericData = ({ title, value }: AtmosphericDataProps) => {
  return (
    <div className="boder rounded-xl bg-neutral-600 p-7">
      <h3 className="mb-4 text-neutral-200">{title}</h3>
      <span className="text-4xl">{value}</span>
    </div>
  );
};

export default CardAtmosphericData;
