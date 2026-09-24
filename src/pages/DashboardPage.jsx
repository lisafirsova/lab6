import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";
import ProgressBar from "../components/ProgressBar";
import {
  LaptopCodeIcon,
  ArrowRightIcon,
  ClockIcon,
  CalendarIcon,
  CheckIcon,
  CoinIcon,
  KeyIcon,
  GiftIcon,
  StarIcon,
  TrophyIcon,
  HeartIcon,
  MoonIcon,
  CatIcon,
} from "../components/icons";

const MY_GOALS = [
  { title: "Стать Java Backend Developer", percent: 60, due: "01.05.2027" },
  { title: "IELTS B2", percent: 35, due: "01.03.2027" },
  { title: "Накопить на ноутбук", percent: 47, due: "01.12.2026" },
];

const TODAY_TASKS = [
  { title: "Изучить Scanner (Java)", tag: "Программирование", time: "−1ч", done: false },
  { title: "Решить 2 задачи на LeetCode", tag: "Программирование", time: "−1.5ч", done: false },
  { title: "Тренировка (ноги + ягодицы)", tag: "Фитнес", time: "−1ч", done: true },
  { title: "Прочитать 10 страниц книги", tag: "Саморазвитие", time: "−30 мин", done: false },
];

const RECENT_EVENTS = [
  { text: "Завершил «Тренировка»", value: "+20", suffix: "⭐" },
  { text: "Получил достижение «Сила воли»", value: "+50", suffix: "🪙" },
  { text: "Пополнил счёт", value: "−50", suffix: "🪙" },
  { text: "Ты получил(а) 3 уровень", value: "+100", suffix: "XP" },
];

const ACHIEVEMENTS = [
  { icon: <CoinIcon className="achievement__icon" />, label: "Награда: Монеты" },
  { icon: <StarIcon className="achievement__icon" />, label: "Награда: Звезда" },
  { icon: <TrophyIcon className="achievement__icon" />, label: "Награда: Скорость" },
  { icon: <HeartIcon className="achievement__icon" />, label: "Награда: Сила воли" },
];

function GoalRing({ percent }) {
  return (
    <div
      className="goal-ring"
      style={{ background: `conic-gradient(var(--color-accent) ${percent * 3.6}deg, var(--color-surface-alt) 0deg)` }}
    >
      <span>{percent}%</span>
    </div>
  );
}

export default function DashboardPage({ activeNav = "Главная", onNavigate }) {
  return (
    <div className="site-page dashboard">
      <DashboardHeader />

      <div className="dashboard__body container">
        <Sidebar active={activeNav} onSelect={onNavigate} />

        <main className="dashboard__main">
          <section className="panel dashboard__profile">
            <div className="dashboard__avatar" aria-hidden="true">
              L
            </div>
            <div className="dashboard__profile-info">
              <div className="dashboard__profile-row">
                <span className="dashboard__name">Lisa</span>
                <span className="dashboard__level">Уровень 12</span>
              </div>
              <ProgressBar percent={70} className="dashboard__xp-bar" />
              <span className="dashboard__xp-label">XP 700/1000</span>
            </div>
          </section>

          <div className="dashboard__hero" aria-hidden="true">
            <MoonIcon className="dashboard__hero-moon" />
          </div>

          <section className="panel goal-card">
            <h2 className="panel__title">
              <span className="panel__title-icon" aria-hidden="true">
                🎯
              </span>
              Активная цель
            </h2>

            <div className="goal-card__body">
              <div className="goal-card__thumb">
                <LaptopCodeIcon className="goal-card__thumb-icon" />
              </div>

              <div className="goal-card__content">
                <h3 className="goal-card__title">Цель: Java Backend Developer</h3>

                <div className="goal-card__progress-row">
                  <ProgressBar percent={72} className="goal-card__progress-bar" />
                  <span className="goal-card__percent">72%</span>
                </div>

                <div className="goal-card__meta">
                  <span>
                    <ClockIcon className="goal-card__meta-icon" />
                    Осталось: 28%
                  </span>
                  <span>
                    <CalendarIcon className="goal-card__meta-icon" />
                    Срок: 01.07.2027
                  </span>
                </div>

                <ul className="goal-card__checklist">
                  <li>
                    <CheckIcon className="goal-card__check-icon" />
                    Изучить Spring Framework
                  </li>
                  <li>
                    <CheckIcon className="goal-card__check-icon" />
                    Изучить Frontend-основы
                  </li>
                </ul>

                <button type="button" className="button-pill">
                  Подробнее <ArrowRightIcon className="button-pill__icon" />
                </button>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panel__header">
              <h2 className="panel__title">Мои цели</h2>
              <a href="#" className="panel__all-link">
                Все <ArrowRightIcon className="panel__all-icon" />
              </a>
            </div>

            <ul className="my-goals__list">
              {MY_GOALS.map((goal) => (
                <li className="my-goals__item" key={goal.title}>
                  <GoalRing percent={goal.percent} />
                  <div>
                    <p className="my-goals__title">{goal.title}</p>
                    <p className="my-goals__due">до {goal.due}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="panel">
            <div className="panel__header">
              <h2 className="panel__title">Сегодня</h2>
              <span className="panel__date">22 сентября</span>
            </div>

            <ul className="today__list">
              {TODAY_TASKS.map((task) => (
                <li className={`today__item${task.done ? " today__item--done" : ""}`} key={task.title}>
                  <span className="today__checkbox">
                    {task.done && <CheckIcon className="today__check-icon" />}
                  </span>
                  <div className="today__body">
                    <p className="today__title">{task.title}</p>
                    <p className="today__tag">{task.tag}</p>
                  </div>
                  <span className="today__time">{task.time}</span>
                </li>
              ))}
            </ul>

            <a href="#" className="panel__all-link panel__all-link--block">
              Все задачи <ArrowRightIcon className="panel__all-icon" />
            </a>
          </section>

          <section className="panel">
            <div className="panel__header">
              <h2 className="panel__title">Последние события</h2>
              <a href="#" className="panel__all-link">
                Все <ArrowRightIcon className="panel__all-icon" />
              </a>
            </div>

            <ul className="events__list">
              {RECENT_EVENTS.map((event) => (
                <li className="events__item" key={event.text}>
                  <span>{event.text}</span>
                  <span
                    className={`events__value${event.value.startsWith("−") ? " events__value--negative" : ""}`}
                  >
                    {event.value} {event.suffix}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <aside className="dashboard__side">
          <section className="panel balance-card">
            <div className="balance-card__row">
              <span className="panel__title">Баланс</span>
              <button type="button" className="balance-card__add" aria-label="Пополнить баланс">
                +
              </button>
            </div>
            <p className="balance-card__amount">
              <CoinIcon className="balance-card__coin-icon" />
              250
            </p>

            <div className="balance-card__reward">
              <span className="panel__title panel__title--sm">Желаемая награда</span>
              <p className="balance-card__reward-amount">
                <KeyIcon className="balance-card__key-icon" />
                300
              </p>
              <ProgressBar percent={83} className="balance-card__progress" />
              <button type="button" className="button-pill button-pill--block">
                Перейти в магазин
              </button>
            </div>
          </section>

          <section className="panel savings-card">
            <span className="panel__title panel__title--sm">Накопления</span>
            <p className="savings-card__label">Машина</p>
            <ProgressBar percent={45} className="savings-card__progress" />
            <span className="savings-card__percent">45%</span>
          </section>

          <section className="panel">
            <div className="panel__header">
              <h2 className="panel__title">Достижения</h2>
              <a href="#" className="panel__all-link">
                Все <ArrowRightIcon className="panel__all-icon" />
              </a>
            </div>

            <ul className="achievements__grid">
              {ACHIEVEMENTS.map((achievement) => (
                <li className="achievement" key={achievement.label}>
                  <span className="achievement__badge">{achievement.icon}</span>
                  <span className="achievement__label">{achievement.label}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="panel cat-card">
            <CatIcon className="cat-card__icon" />
            <p className="cat-card__title">Кошка в окне</p>
            <p className="cat-card__text">Твой личный спутник в достижении целей.</p>
          </section>

          <section className="panel motivation-card">
            <p className="motivation-card__title">Ты можешь больше, чем думаешь.</p>
            <p className="motivation-card__text">
              Заверши ещё один квест сегодня — и будь ближе к своей цели.
            </p>
          </section>
        </aside>
      </div>

      <div className="promo-banner container">
        <GiftIcon className="promo-banner__icon" />
        <div>
          <p className="promo-banner__title">Развивайся. Достигай. Получай награды.</p>
          <p className="promo-banner__subtitle">Crave — твой личный помощник</p>
        </div>
      </div>

      <BottomNav active={activeNav} onSelect={onNavigate} />
    </div>
  );
}
