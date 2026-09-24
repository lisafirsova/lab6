import React from "react";
import { InstagramIcon, TelegramIcon } from "./icons";
import logo from "../ChatGPT Image 3 авг. 2026 г., 15_37_13.png";

export default function SiteHeader({ onLoginClick }) {
  return (
    <header className="auth-header">
      <div className="auth-header__social">
        <a href="#" aria-label="Instagram">
          <InstagramIcon className="header-icon" />
        </a>
        <a href="#" aria-label="Telegram">
          <TelegramIcon className="header-icon" />
        </a>
      </div>

      <div className="auth-header__logo">
        <img src={logo} alt="Crave logo" className="header-logo-mark" />
      </div>

      <button type="button" className="button-pill auth-header__login-button" onClick={onLoginClick}>
        Войти
      </button>
    </header>
  );
}
