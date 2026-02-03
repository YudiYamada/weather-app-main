import Logo from "/logo.svg";
import UnitsDropdown from "./units-dropdown";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between">
      <div>
        <img src={Logo} alt="Logo of Web Site" />
      </div>
      <div className="flex items-center justify-center gap-1 rounded-md bg-neutral-600 p-2.5">
        <UnitsDropdown />
      </div>
    </header>
  );
};

export default Header;
