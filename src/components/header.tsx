import Logo from "../assets/logo.svg";
import UnitsDropdown from "./units-dropdown";
import Input from "./input";
import IconSearch from "../assets/icon-search.svg"
import Button from "./button";

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

      <div className="mt-3 flex flex-col items-center">
        <div>
          <h1 className="text-center text-5xl">How's the sky looking today?</h1>
        </div>
        <div className="mt-10 flex flex-col gap-4 w-full md:flex-row md:w-150">
          <Input icon={IconSearch} type="text" placeholder="Search for a place..." />
          <Button>Search</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
