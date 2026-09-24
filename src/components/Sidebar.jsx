import React from "react";

const ITEMS = ["Главная", "Рейтинг", "Цели", "Финансы", "Профиль"];

export default function Sidebar({ active = "Главная", onSelect }) {
  return (
    <nav className="sidebar" aria-label="Основная навигация">
      <ul className="sidebar__list">
        {ITEMS.map((item) => (
          <li key={item}>
            <button
              type="button"
              className={`sidebar__link${item === active ? " sidebar__link--active" : ""}`}
              onClick={() => onSelect?.(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
