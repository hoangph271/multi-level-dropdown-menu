import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

const AMenu = () => {
  return (
    <ul className="menus">
      {menuItems.map((menu) => {
        return <MenuItems items={menu} key={index} />;
      })}
    </ul>
  );
};

const Navbar = () => {
  return (
    <nav>
      <AMenu />
    </nav>
  );
};

export default Navbar;
