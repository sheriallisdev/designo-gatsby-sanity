import styled from "styled-components";

export const Form = styled.form`
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

    &::placeholder {
      color: var(--white);
      opacity: 0.7;
    }
  }

  textarea {
    min-height: 7.875rem;
    resize: none;
  }

  @media (min-width: 1200px) {
    flex: 1 1 30%;
  }
`;

export const SubmitButton = styled.button`
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
  transition: var(--transition);

  &:hover {
    cursor: pointer;
    background-color: var(--light-peach);
    color: var(--white);
  }

  &:focus {
    background-color: var(--light-peach);
    color: var(--white);
    outline: none;
    box-shadow: 0 0 0 3px var(--black);
  }

  @media (min-width: 1200px) {
    align-self: flex-end;
    margin-top: 1.5rem;
  }
`;
