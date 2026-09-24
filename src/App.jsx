import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  const [view, setView] = useState("landing");

  switch (view) {
    case "login":
      return (
        <LoginPage
          onNavigateToRegister={() => setView("register")}
          onNavigateHome={() => setView("landing")}
          onSubmit={() => setView("dashboard")}
        />
      );
    case "register":
      return (
        <RegisterPage
          onNavigateToLogin={() => setView("login")}
          onNavigateHome={() => setView("landing")}
          onSubmit={() => setView("dashboard")}
        />
      );
    case "dashboard":
      return <DashboardPage />;
    case "landing":
    default:
      return (
        <LandingPage onLoginClick={() => setView("login")} onTryClick={() => setView("register")} />
      );
  }
}
