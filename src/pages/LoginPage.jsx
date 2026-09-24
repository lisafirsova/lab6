import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import AuthInput from "../components/AuthInput";

export default function LoginPage({ onSubmit, onNavigateToRegister, onNavigateHome }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(form);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <AuthLayout onHomeClick={onNavigateHome}>
      <h1 className="auth-title">Зайдите в свой аккаунт</h1>
      <p className="auth-subtitle">Спасибо, что выбираете нас!</p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <AuthInput
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={form.email}
          onChange={handleChange("email")}
          autoComplete="email"
          onKeyDown={handleKeyDown}
        />
        <AuthInput
          type="password"
          name="password"
          placeholder="Пароль"
          value={form.password}
          onChange={handleChange("password")}
          autoComplete="current-password"
          onKeyDown={handleKeyDown}
        />

        <button type="submit" className="button-pill button-pill--block">
          Войти
        </button>
      </form>

      <p className="auth-switch">
        Нет аккаунта?{" "}
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            onNavigateToRegister?.();
          }}
        >
          Зарегистрируйтесь!
        </a>
      </p>
    </AuthLayout>
  );
}
