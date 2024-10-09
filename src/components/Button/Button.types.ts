import React from "react";

export type ButtonVariants = 'icon' | 'solid' | 'text'

export type ButtonProps = {
  title?: string | string[];
  onClick: () => void;
  variant?: ButtonVariants
  icon?: React.ReactNode
  disabled?: boolean
  className?: string
};
