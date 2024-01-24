import { useState } from "react";
import "./Sort.scss";

export const Filter = () => {
  const [category, setCategory] = useState("all");
  return (
    <div className="sort">
      <div className="sort__content">
        <img src="" alt="" />
        <p>Сортировка По</p>
        <span></span>
      </div>
    </div>
  );
};
