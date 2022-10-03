import React from "react";

import { ButtonCustom } from "./styles";

interface ButtonProps {
  label: string;
  onClick: (e: any) => void;
  type: "button" | "submit";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type,
  disabled = false,
}) => {
  return (
    <ButtonCustom type={type} onClick={onClick} disabled={disabled}>
      <span>{label}</span>
    </ButtonCustom>
  );
};

export default Button;
