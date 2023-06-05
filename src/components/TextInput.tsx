import { ChangeEvent } from "react";
import styled from "styled-components";

type SelectProps = {
  name: string;
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};

const StyledTextInput = styled.input`
  appearance: none;
  border: none;
  border-radius: 0;
  background: #999;
  padding: 0.5rem;
  color: white;
  font-size: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  margin: 2rem 1rem 2rem 0;
  width: 3rem;

  &:active,
  &:focus {
    appearance: none;
    border: none;
    outline: none;
  }
`;

function TextInput({ name, value, onChange }: SelectProps) {
  return (
    <StyledTextInput
      name={name}
      onChange={onChange}
      value={value}
      type="text"
    />
  );
}

export default TextInput;
