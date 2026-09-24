import React from "react";
import AuthHeader from "./AuthHeader";
import Footer from "./Footer";

export default function AuthLayout({ children, onHomeClick }) {
  return (
    <div className="auth-page">
      <AuthHeader onHomeClick={onHomeClick} />
      <main className="auth-main">{children}</main>
      <Footer />
    </div>
  );
}
