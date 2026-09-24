import React from "react";
import { InstagramIcon, TelegramIcon, CraveMark } from "./icons";

export default function Header({ onHomeClick }) {
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
        <CraveMark className="header-logo-mark" />
        <span className="auth-header__logo-word">CRAVE</span>
      </div>

      <button type="button" className="button-pill" onClick={onHomeClick}>
        Главная
      </button>
    </header>
  );
}
