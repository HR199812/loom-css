import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const base = "px-4 py-2 rounded-md font-medium transition-colors duration-200";

  const variants = {
    primary: "bg-brand text-white hover:bg-brand/90",
    secondary: "bg-accent text-black hover:bg-accent/90",
    outline: "border border-brand text-brand hover:bg-brand/10"
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};
