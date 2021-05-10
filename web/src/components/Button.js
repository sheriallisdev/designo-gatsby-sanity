import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 16px 24px;
  border: none;
  border-radius: 8px;
  font-size: 0.9375rem;
  font-weight: 500;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.primary ? "var(--white)" : "var(--peach)"};
  color: ${(props) => (props.primary ? "var(--black)" : "var(--white)")};

  &:hover {
    cursor: pointer;
    background-color: var(--light-peach);
    color: var(--white);
  }
`;

function Button({ primary, label }) {
  return <StyledButton primary={primary}>{label}</StyledButton>;
}

export default Button;
