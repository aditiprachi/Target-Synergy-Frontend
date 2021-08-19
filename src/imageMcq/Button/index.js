import { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../ThemeContext";

const StyledButton = styled.button`
  background-color: ${({ styles }) => styles.backgroundColor};
  transition: ease background-color 250ms;
  padding: 1rem;
  border: 3px solid ${({ styles }) => styles.border};
  border-radius: 12px;
  width: auto;
  cursor: pointer;
  font-weight: bold;
  color: ${({ styles }) => styles.textColor};

  &:hover {
    opacity: 0.6;
  }
`;

const Button = ({ onClick, children, ...props }) => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.lightBlue,
    border: theme.lightBlue,
    hover: theme.midBlue,
    textColor: theme.darkBlue
  };
  return (
    <StyledButton {...{ onClick, styles, ...props }}>{children}</StyledButton>
  );
};

export default Button;
