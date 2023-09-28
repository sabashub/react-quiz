import React from "react";

export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <div>
      <header className="progress">
        <progress
          max={numQuestions}
          value={index + Number(answer !== null)}
        ></progress>
        <p>
          Question: <strong>{index}</strong> / {numQuestions}
        </p>
        <p>
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </header>
    </div>
  );
}
