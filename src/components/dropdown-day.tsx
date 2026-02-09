import { useState } from "react";
import IconDropdown from "../assets/icon-dropdown.svg";
import DropdownGroup from "./dropdown-group";
import DropdownItem from "./dropdown-item";

const DayDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Monday");

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-md bg-neutral-600 p-2.5 text-sm font-medium text-white transition-all hover:cursor-pointer active:scale-95"
      >
        <span>{selectedDay}</span>
        <img
          src={IconDropdown}
          alt=""
          className={`w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-xl border border-neutral-700 bg-neutral-800 p-2 shadow-2xl">
          <DropdownGroup title="Select Day">
            {days.map((day) => (
              <DropdownItem
                key={day}
                label={day}
                isActive={selectedDay === day}
                onClick={() => {
                  setSelectedDay(day);
                  setIsOpen(false);
                }}
              />
            ))}
          </DropdownGroup>
        </div>
      )}
    </div>
  );
};

export default DayDropdown;