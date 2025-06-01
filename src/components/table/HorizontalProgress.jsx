import React from "react";

const HorizontalProgress = ({
  progress,
  barColor = "bg-success",
  barHeight = "ht-3",
  striped = false,
  animated = false,
}) => {
  const barClasses = [
    "progress-bar",
    barColor,
    striped ? "progress-bar-striped" : "",
    animated ? "progress-bar-animated" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`progress ${barHeight}`}>
      <div
        className={barClasses}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${progress}%` }}
      >
        <span className="sr-only">{progress}% Complete</span>
      </div>
    </div>
  );
};

export default HorizontalProgress;
