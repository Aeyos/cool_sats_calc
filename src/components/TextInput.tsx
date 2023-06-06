import { ChangeEvent } from "react";
import styled from "styled-components";

type SelectProps = {
  name: string;
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'number';
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
  width: 3rem;
  outline: 1px solid gray;
  outline-offset: -1px;

  &:active,
  &:focus {
    appearance: none;
    border: none;
    outline: none;
  }
`;

function TextInput({ name, value, onChange, type = "text" }: SelectProps) {
  return (
    <StyledTextInput
      name={name}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
}

export default TextInput;
