import IconCheckMark from "../assets/icon-checkmark.svg";

interface DropdownItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const DropdownItem = ({ label, isActive, onClick }: DropdownItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-lg p-3 text-sm transition-colors ${isActive ? "text-neutral-0 bg-neutral-700" : "text-neutral-300 hover:bg-neutral-700/50"}`}
    >
      <span>{label}</span>
      {isActive && (
        <img src={IconCheckMark} alt="Icon Check Mark" />
      )}
    </button>
  );
};

export default DropdownItem;
