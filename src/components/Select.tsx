import { ChangeEvent } from "react";
import styled from "styled-components";

type OptionType = {
  label: string;
  value: string;
};

type SelectProps = {
  options: OptionType[];
  name: string;
  value: string;
  onChange: (evt: ChangeEvent<HTMLSelectElement>) => void;
};

const StyledSelect = styled.select`
  appearance: none;
  border-radius: 0;
  background: #999;
  padding: 0.5rem;
  color: white;
  font-size: 1rem;
  background-image: linear-gradient(45deg, #999 40%, transparent 40%),
    linear-gradient(-45deg, #999 40%, transparent 40%),
    linear-gradient(45deg, white, white 50%, transparent 50%),
    linear-gradient(-45deg, white, white 50%, transparent 50%);
  background-size: 20px 14px;
  background-repeat: no-repeat;
  background-position: calc(100% - 20px) calc(50% + 3px);
  padding-right: 4rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  margin: 2rem 1rem 2rem 0;

  &:active,
  &:focus {
    appearance: none;
    border: none;
    outline: none;
  }
`;

function Select({ options, name, value, onChange }: SelectProps) {
  return (
    <StyledSelect name={name} onChange={onChange} value={value}>
      {options.map((option) => (
        <option key={option.value} label={option.label} value={option.value} />
      ))}
    </StyledSelect>
  );
}

export default Select;
