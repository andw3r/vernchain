import Button from "../Button";
import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <header className="container flex items-center justify-between xs:h-[100px] md:h-[120px]">
      {/* logo */}
      <Logo />

      {/* menu */}
      <Menu />
    </header>
  );
};

export default NavBar;
