import React from "react";

export default function Badge({ icon, children, className = "" }) {
  return (
    <span className={`badge ${className}`}>
      {icon}
      {children}
    </span>
  );
}
