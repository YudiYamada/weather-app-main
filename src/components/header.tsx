import Logo from "../assets/logo.svg";
import UnitsDropdown from "./units-dropdown";


const Header = () => {
  return (
    <header className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <img src={Logo} alt="Logo of Web Site" />
        </div>
        <div className="flex items-center justify-center gap-1 rounded-md bg-neutral-600 p-2.5">
          <UnitsDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
