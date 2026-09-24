import React from "react";

export default function AuthInput({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  autoComplete,
  onKeyDown,
}) {
  return (
    <input
      className="auth-input"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      onKeyDown={onKeyDown}
    />
  );
}
