import { ChangeEvent, ReactNode } from "react";
import styled from "styled-components";

interface StyledInputProps {
  width?: number;
  readonly?: boolean;
  disabled?: boolean;
}

interface InputProps<T extends string> extends StyledInputProps {
  placeholder?: string;
  prefix?: ReactNode;
  postfix?: ReactNode;
  value: T;
  name?: string;
  type?: string;
  maxLength?: number;

  formatCallback?: (value: T) => string;
  validateCallback?: (value: T) => ReactNode;
  onInput: (value: string, e: EventTarget) => void;
}

const Input = <T extends string>({
  width,
  readonly,
  disabled,
  placeholder,
  prefix,
  postfix,
  value,
  name,
  type,
  maxLength,
  formatCallback,
  validateCallback,
  onInput,
}: InputProps<T>) => {
  const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value.slice(0, maxLength) as T;

    onInput(value, e.target);
  };

  return <StyledInputContainer
    width={width}
    readonly={readonly}
    disabled={disabled}
  >
    {prefix}
    <StyledInput
      readOnly={readonly}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      name={name}
      type={type}
      maxLength={maxLength}
      onInput={onInputHandler}
    />
    {postfix}
  </StyledInputContainer>;
};

const StyledInputContainer = styled.div<StyledInputProps>`
  width: ${props => props.width}px;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #808080;
`;
const StyledInput = styled.input`
  flex: 1;
  border: 0;
  outline: none;
  background: none;
  font-size: 16px;
  color: #363636;
`;

StyledInput.defaultProps = {
  width: 180,
};

export default Input;