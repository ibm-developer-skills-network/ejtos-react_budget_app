import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Budget = () => {
  const { budget } = useContext(AppContext);
  return (
    <div className="alert alert-secondary">
      <span>Budget: £{budget}</span>
    </div>
  );
};
