import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import AuthInput from "../components/AuthInput";

export default function RegisterPage({ onSubmit, onNavigateToLogin, onNavigateHome }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
      <h1 className="auth-title">Регистрация</h1>
      <p className="auth-subtitle">Присоединяйтесь к нам!</p>

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
          autoComplete="new-password"
          onKeyDown={handleKeyDown}
        />
        <AuthInput
          type="password"
          name="confirmPassword"
          placeholder="Повторите пароль"
          value={form.confirmPassword}
          onChange={handleChange("confirmPassword")}
          autoComplete="new-password"
          onKeyDown={handleKeyDown}
        />

        <button type="submit" className="button-pill button-pill--block">
          Зарегистрироваться
        </button>
      </form>

      <p className="auth-switch">
        Есть аккаунт?{" "}
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            onNavigateToLogin?.();
          }}
        >
          Войдите!
        </a>
      </p>
    </AuthLayout>
  );
}
