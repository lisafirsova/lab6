import React from "react";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import Badge from "../components/Badge";
import {
  SwordsIcon,
  GiftIcon,
  WalletIcon,
  StatsIcon,
  TasksIcon,
  HeartIcon,
  CheckIcon,
} from "../components/icons";

const HERO_BADGES = [
  { icon: <SwordsIcon className="badge__icon" />, label: "Испытания" },
  { icon: <GiftIcon className="badge__icon" />, label: "Награды" },
  { icon: <WalletIcon className="badge__icon" />, label: "Магазин" },
  { icon: <StatsIcon className="badge__icon" />, label: "Навыки" },
  { icon: <TasksIcon className="badge__icon" />, label: "Задания" },
  { icon: <HeartIcon className="badge__icon" />, label: "Отдых" },
];

const ABOUT_POINTS = [
  "Чёткий план от ИИ под любую цель — от изучения языка до смены профессии",
  "Награды и достижения за каждый выполненный шаг, а не только в самом конце",
  "Наглядный прогресс, который видно каждый день, а не только «когда-нибудь»",
];

const REASONS = [
  {
    title: "Нет чёткого плана",
    text: "Цель кажется огромной, и непонятно, с чего начать — мотивация пропадает уже в первый день.",
  },
  {
    title: "Не видно прогресса",
    text: "Без промежуточных шагов сложно понять, двигаешься ли ты вперёд, и это демотивирует.",
  },
  {
    title: "Легко забросить",
    text: "Обычные списки задач никак не поощряют за старания, поэтому цель откладывается «на потом».",
  },
  {
    title: "Нет системы наград",
    text: "Мозгу нужна обратная связь здесь и сейчас, а не абстрактный результат через полгода.",
  },
];

const STEPS = [
  "Создай цель",
  "Получи план от AI",
  "Выполняй задания",
  "Получай награды",
];

export default function LandingPage({ onLoginClick, onTryClick }) {
  return (
    <div className="site-page">
      <SiteHeader onLoginClick={onLoginClick} />

      <main>
        <section className="hero container">
          <div className="hero__panel">
            <div className="hero__content">
              <h1 className="hero__title">Преврати свою жизнь в игру</h1>
              <p className="hero__subtitle">
                Для пользователей мы – игровой мир, где цели превращаются в квесты, а
                каждый шаг приближает к желаемому результату.
              </p>
              <button type="button" className="button-pill" onClick={onTryClick}>
                Попробовать
              </button>
            </div>
          </div>
        </section>

        <section className="about container">
          <h2 className="section-title">Crave — это...</h2>
          <div className="about__grid">
            <div className="about__card">
              <p className="about__text">
                Приложение, которое превращает твои цели в увлекательную игру. Ты
                создаёшь цель — ИИ разбивает её на понятные квесты, а каждый
                выполненный шаг приносит опыт, монеты и настоящий прогресс, который
                видно сразу.
              </p>
              <ul className="about__list">
                {ABOUT_POINTS.map((point) => (
                  <li key={point}>
                    <CheckIcon className="about__list-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <button type="button" className="button-pill button-pill--block" onClick={onTryClick}>
                Начать бесплатно
              </button>
            </div>

            <div className="about__art">
            </div>
          </div>
        </section>

        <section className="reasons container">
          <h2 className="section-title">Почему обычные цели не работают?</h2>
          <div className="reasons__grid">
            {REASONS.map((reason) => (
              <div className="reasons__card" key={reason.title}>
                <h3 className="reasons__card-title">{reason.title}</h3>
                <p className="reasons__card-text">{reason.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="fix container">
          <div className="fix__panel">
            <div className="fix__intro">
              <h2 className="fix__title">Как исправить</h2>
              <p className="fix__text">Мы решили вашу проблему в несколько шагов:</p>
              <button
                type="button"
                className="button-pill button-pill--muted"
                onClick={onTryClick}
              >
                Попробовать
              </button>
            </div>

            <ol className="fix__steps">
              {STEPS.map((step, index) => (
                <li className="fix__step" key={step}>
                  <span className="fix__step-number">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
