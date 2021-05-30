import * as React from "react";
import ContactHeader from "../components/ContactHeader";
import LocationLinks from "../components/LocationLinks";
import Seo from "../components/SEO";

const ContactPage = () => {
  return (
    <>
      <Seo title="Contact Us" />
      <main>
        <ContactHeader />
        <LocationLinks />
      </main>
    </>
  );
};

export default ContactPage;
