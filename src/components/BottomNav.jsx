import React from "react";
import { HomeIcon, TasksIcon, AwardsIcon, WalletIcon, StatsIcon } from "./icons";

const ITEMS = [
  { label: "Главная", Icon: HomeIcon },
  { label: "Задачи", Icon: TasksIcon },
  { label: "Награды", Icon: AwardsIcon },
  { label: "Кошелек", Icon: WalletIcon },
  { label: "Статистика", Icon: StatsIcon },
];

export default function BottomNav({ active = "Главная", onSelect }) {
  return (
    <nav className="bottom-nav" aria-label="Основная навигация">
      <ul className="bottom-nav__list">
        {ITEMS.map(({ label, Icon }) => (
          <li key={label}>
            <button
              type="button"
              className={`bottom-nav__link${label === active ? " bottom-nav__link--active" : ""}`}
              onClick={() => onSelect?.(label)}
            >
              <Icon className="bottom-nav__icon" />
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
