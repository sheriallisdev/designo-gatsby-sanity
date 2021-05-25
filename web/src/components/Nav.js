import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";
import iconClose from "../images/icon-close.svg";
import iconHamburger from "../images/icon-hamburger.svg";

const NavStyles = styled.nav`
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  margin: auto;
  max-width: var(--site-container);

  ul {
    display: none;
  }

  a {
    text-decoration: none;
    color: var(--black);
    text-transform: uppercase;
    font-size: 0.875rem;

    &:hover {
      text-decoration: underline;
    }
  }

  .logoLink {
    display: inline-flex;
  }

  img {
    height: 27px;
  }

  .overlay {
    display: none;
  }

  button > img {
    height: 20px;
    width: 20px;
  }

  button {
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul.active {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
    position: absolute;
    margin-top: 0;
    top: 96px;
    padding: 48px 24px;
    left: 0;
    background-color: var(--black);
    z-index: 10;

    li {
      margin-left: 42px;
      margin-bottom: 32px;
    }

    li:last-child {
      margin-bottom: 0;
    }

    a {
      color: var(--white);
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

  .overlay-active {
    width: 100vw;
    height: calc(100vh - 96px);
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 96px;
    left: 0;
    z-index: 1;
  }

  @media (min-width: 670px) {
    ul {
      display: flex;
      list-style: none;
    }

    ul.active {
      display: none;
    }

    li {
      margin-left: 42px;
    }

    button,
    .overlay-active {
      display: none;
    }
  }
`;

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleCloseMenu() {
    setMenuIsOpen(false);
  }

  function handleToggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <NavStyles>
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
    </NavStyles>
  );
};

export default Nav;
