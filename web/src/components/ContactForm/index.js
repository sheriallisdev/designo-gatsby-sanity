import React from "react";
import * as Styled from "./styles";

function ContactForm() {
  return (
    <Styled.Form
      name="main-contact"
      method="POST"
      data-netlify="true"
      onSubmit="submit"
    >
      <fieldset>
        <legend className="sr-only">Contact Us</legend>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          autoComplete="name"
          required
        ></input>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="Email Address"
          required
        ></input>
        <label htmlFor="phone" className="sr-only">
          Phone
        </label>
        <input
          type="phone"
          name="phone"
          id="phone"
          autoComplete="tel"
          placeholder="Phone"
          required
        ></input>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
        ></textarea>
      </fieldset>
      <input type="hidden" name="form-name" value="main-contact" />
      <Styled.SubmitButton type="submit">Submit</Styled.SubmitButton>
    </Styled.Form>
  );
}

export default ContactForm;
