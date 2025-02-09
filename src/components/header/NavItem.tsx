import { NavLink } from "react-router-dom";
import { navItemProps } from "../../types";

export default function NavItem({ txt, path }: navItemProps) {
    console.log('NavItem');
  return (
    <li className=" bg-amber-500 py-0">
      <NavLink to={path} className=" px-4 bg-red-600 h-full py-2 hover:bg-gray-300 cursor-pointer">
        {txt}
      </NavLink>
    </li>
  );
}
