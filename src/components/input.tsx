import { useState } from "react";
import DropdownGroup from "./dropdown-group";
import DropdownItem from "./dropdown-item";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  icon?: string;
  suggestions?: string[];
}

const Input = ({ placeholder, type, icon, suggestions = [], ...rest }: InputProps) => {
  const [open, setOpen] = useState(false);

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
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
        {...rest}
      />

      {open && suggestions.length > 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-neutral-700 bg-neutral-800 p-2 shadow-2xl">
          <DropdownGroup title="Suggestions">
            {suggestions.map((city) => (
              <DropdownItem
                key={city}
                label={city}
                isActive={false}
                onClick={() => {}}
              />
            ))}
          </DropdownGroup>
        </div>
      )}
    </div>
  );
};

export default Input;
