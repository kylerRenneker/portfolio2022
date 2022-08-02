import React from "react";

export const SectionHeader = (props) => {
  return (
    <header>
      <h3>
        <span className="mono accent section-number">0.{props.index}</span>
        {props.text}
      </h3>
    </header>
  );
};
