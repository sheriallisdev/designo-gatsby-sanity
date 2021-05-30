import React from "react";
import ContactForm from "../ContactForm";
import * as Styled from "./styles";

function ContactHeader() {
  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.Content>
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </Styled.Content>
        <ContactForm />
      </Styled.Container>
    </Styled.Header>
  );
}

export default ContactHeader;
