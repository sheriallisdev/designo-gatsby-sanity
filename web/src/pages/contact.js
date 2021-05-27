import * as React from "react";
import ContactHeader from "../components/ContactHeader";
import LocationLinks from "../components/LocationLinks";
import SEO from "../components/SEO";

const ContactPage = () => {
  return (
    <>
      <SEO title="Contact Us" />
      <main>
        <ContactHeader />
        <LocationLinks />
      </main>
    </>
  );
};

export default ContactPage;
