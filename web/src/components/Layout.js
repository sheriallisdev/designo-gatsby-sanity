import React from "react";
import Typography from "../styles/Typography";
import GlobalStyles from "../styles/GlobalStyles";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "normalize.css";

export default function Layout({ children }) {
  return (
    <>
      <Typography />
      <GlobalStyles />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
