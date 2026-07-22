import { LayoutGroup } from "framer-motion";

import DesktopNavItem from "./DesktopNavItem";

const NavLinks = ({ links, activeHref, onNavigate }) => {
  return (
    <LayoutGroup id="nav-links">
      <nav className="navbar-links flex items-center">
        {links.map((item) => (
          <DesktopNavItem
            key={item.title}
            href={item.href}
            title={item.title}
            active={activeHref === item.href}
            onClick={onNavigate}
          />
        ))}
      </nav>
    </LayoutGroup>
  );
};

export default NavLinks;
