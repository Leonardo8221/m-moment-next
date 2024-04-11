import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}
const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
