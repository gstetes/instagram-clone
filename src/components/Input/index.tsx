import React from "react";

import { InputField } from "./styles";

interface InputProps {
  type: "text" | "password" | "number" | "email";
  value: string;
  onChangeValue: (value: string) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChangeValue,
  placeholder,
}) => {
  return (
    <InputField
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChangeValue?.(e?.target?.value)}
    />
  );
};

export default Input;
