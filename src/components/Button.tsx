import styled, { css } from "styled-components";
import COLORS from "../const/Colors";

type SelectProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: (evt: number) => void;
};

const StyledButton = styled.button`
  appearance: none;
  border: none;
  border-radius: 0;
  background: #999;
  padding: 0.5rem;
  color: white;
  font-size: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  margin: 2rem 1rem 2rem 0;
  cursor: pointer;
  transition: background ease-in-out 0.1s, transform ease-in-out 0.1s,
    box-shadow ease-in-out 0.1s;
  outline: 2px solid ${COLORS.ORANGE};
  outline-offset: 3px;
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
      outline: none;
    `}

  &:hover {
    background: ${COLORS.ORANGE};
    transform: scale(1.01);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
`;

function Button({ children, disabled, onClick }: SelectProps) {
  return (
    <StyledButton $disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
