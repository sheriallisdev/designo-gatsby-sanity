import React from "react";
import logoLight from "../../images/logo-light.png";
import logoDark from "../../images/logo-dark.png";

const Logo = ({ variant }) => {
  return <img src={variant === "dark" ? logoDark : logoLight} alt="logo" />;
};

export default Logo;
