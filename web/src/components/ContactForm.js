import React from "react";
import styled from "styled-components";

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;

  fieldset {
    border: none;
    padding: 0;
  }

  input,
  textarea {
    border: none;
    background: transparent;
    width: 100%;
    border-bottom: 1px solid var(--white);
    padding: 1.5rem 0.75rem 0.75rem 0.75rem;
    color: var(--white);
  }

  textarea {
    min-height: 7.875rem;
  }

  button {
    align-self: center;
    text-transform: uppercase;
    margin-top: 2.5rem;
    padding: 1.125rem 3rem;
    border: none;
    border-radius: 8px;
    font-size: 0.9375rem;
    font-weight: 500;
    text-transform: uppercase;
    background-color: var(--white);
    color: var(--black);
    text-decoration: none;
    &:hover {
      cursor: pointer;
      background-color: var(--light-peach);
      color: var(--white);
    }

    @media (min-width: 1200px) {
      align-self: flex-end;
      margin-top: 1.5rem;
    }
  }

  @media (min-width: 1200px) {
    flex: 1 1 30%;
  }
`;

function ContactForm() {
  return (
    <StyledContactForm>
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
        <textarea id="message" placeholder="Your Message"></textarea>
      </fieldset>
      <button type="submit">Submit</button>
    </StyledContactForm>
  );
}

export default ContactForm;
