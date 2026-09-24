import React from "react";

export default function ProgressBar({ percent, className = "" }) {
  const value = Math.max(0, Math.min(100, percent));
  return (
    <div
      className={`progress-bar ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="progress-bar__fill" style={{ width: `${value}%` }} />
    </div>
  );
}
