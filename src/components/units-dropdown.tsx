import { useState } from "react";
import IconUnits from "../assets/icon-units.svg";
import IconDropdown from "../assets/icon-dropdown.svg";
import DropdownGroup from "../components/dropdown-group";
import DropdownItem from "../components/dropdown-item";

const UnitsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unit, setUnit] = useState("celsius");
  const [speed, setSpeed] = useState("km/h");
  const [precipitation, setPrecipitation] = useState("mm");

  return (
    <div className="relative inline-block text-left">
      {/* Botão Gatilho */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-neutral-0 flex items-center gap-2 rounded-md bg-neutral-600 p-2.5 transition-all hover:bg-neutral-700 active:scale-95"
      >
        <img src={IconUnits} alt="" className="w-5" />
        <span className="text-sm font-medium">Units</span>
        <img
          src={IconDropdown}
          alt=""
          className={`w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Menu Flutuante */}
      {isOpen && (
        <div className="absolute right-0 z-50 mt-5 w-64 origin-top-right rounded-xl border border-neutral-700 bg-neutral-800 p-2 shadow-2xl">
          <button className="text-neutral-0 mb-2 w-full rounded-lg p-3 text-left text-sm transition-colors hover:bg-neutral-700">
            Switch to Imperial
          </button>

          <div className="my-2 h-px bg-neutral-700" />

          <DropdownGroup title="Temperature">
            <DropdownItem
              label="Celsius (°C)"
              isActive={unit === "celsius"}
              onClick={() => setUnit("celsius")}
            />
            <DropdownItem
              label="Fahrenheit (°F)"
              isActive={unit === "fahrenheit"}
              onClick={() => setUnit("fahrenheit")}
            />
          </DropdownGroup>

          <DropdownGroup title="Wind Speed">
            <DropdownItem
              label="km/h"
              isActive={speed === "km/h"}
              onClick={() => setSpeed("km/h")}
            />
            <DropdownItem
              label="mph"
              isActive={speed === "mph"}
              onClick={() => setSpeed("mph")}
            />
          </DropdownGroup>

          <DropdownGroup title="Precipitation">
            <DropdownItem
              label="Millimeters (mm)"
              isActive={precipitation === "mm"}
              onClick={() => setPrecipitation("mm")}
            />
            <DropdownItem
              label="Inches (in)"
              isActive={precipitation === "in"}
              onClick={() => setPrecipitation("in")}
            />
          </DropdownGroup>
        </div>
      )}
    </div>
  );
};

export default UnitsDropdown;
