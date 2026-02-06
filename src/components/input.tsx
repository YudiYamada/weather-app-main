interface InputProps {
  placeholder: string;
  type: string;
  icon?: string;
}

const Input = ({ placeholder, type, icon }: InputProps) => {
  return (
    <div className="relative w-full">
      {icon && (
        <img
          src={icon}
          alt=""
          className="absolute top-1/2 left-4 w-5 -translate-y-1/2"
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-md bg-neutral-600 p-4 ${icon ? "pl-12" : "pl-4"}`}
      />
    </div>
  );
};

export default Input;
