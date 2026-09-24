import React from "react";

export default function Footer({ phone = "+375 (XX) XXX-XX", supportHref = "#" }) {
  return (
    <footer className="site-footer">
      <span className="site-footer__brand">Crave</span>

      <div className="site-footer__meta">
        <span>{phone}</span>
        <a href={supportHref}>Поддержка</a>
      </div>
    </footer>
  );
}
