import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "../Logo";
import * as Styled from "./styles";
import iconClose from "../../images/icon-close.svg";
import iconHamburger from "../../images/icon-hamburger.svg";

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleCloseMenu() {
    setMenuIsOpen(false);
  }

  function handleToggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <Styled.Nav>
      <Link to="/" className="logoLink">
        <Logo variant="dark" alt="Designo logo" />
      </Link>
      <ul className={menuIsOpen ? "active" : ""}>
        <li>
          <Link to="/about" onClick={handleCloseMenu}>
            Our Company
          </Link>
        </li>
        <li>
          <Link to="/locations" onClick={handleCloseMenu}>
            Locations
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleCloseMenu}>
            Contact
          </Link>
        </li>
      </ul>
      <button className="toggle" onClick={handleToggleMenu}>
        <img src={menuIsOpen ? iconClose : iconHamburger} alt="open menu" />
      </button>
      <div className={menuIsOpen ? "overlay-active" : "overlay"}></div>
    </Styled.Nav>
  );
};

export default Nav;
