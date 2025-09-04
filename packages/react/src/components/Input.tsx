import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => (
  <div className="flex flex-col gap-1">
    {label && <label className="text-sm font-medium">{label}</label>}
    <input
      className={`border rounded-md px-3 py-2 ${
        error ? "border-red-500" : "border-neutral"
      }`}
      {...props}
    />
    {error && <span className="text-xs text-red-500">{error}</span>}
  </div>
);
