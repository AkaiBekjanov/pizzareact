import "./Filter.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/slices/filter";
import { useState } from "react";

export const Filter = () => {
  const category = useSelector((state) => state.filterSlice.category);

  const dispatch = useDispatch();

  return (
    <div className="filter__links">
      <li
        onClick={() => dispatch(setCategory("all"))}
        style={{
          background: category === "all" ? "#282828" : "",
          color: category === "all" ? "#FFF" : "#2C2C2C",
        }}
        className="filter__link"
      >
        Все
      </li>
      <li
        onClick={() => dispatch(setCategory("meat"))}
        style={{
          background: category === "meat" ? "#282828" : "#F9F9F9",
          color: category === "meat" ? "#FFF" : "#2C2C2C",
        }}
        className="filter__link"
      >
        Мясные
      </li>
      <li
        onClick={() => dispatch(setCategory("vegan"))}
        style={{
          background: category === "vegan" ? "#282828" : "#F9F9F9",
          color: category === "vegan" ? "#FFF" : "#2C2C2C",
        }}
        className="filter__link"
      >
        Вегетарианская
      </li>
      <li
        onClick={() => dispatch(setCategory("grill"))}
        style={{
          background: category === "grill" ? "#282828" : "#F9F9F9",
          color: category === "grill" ? "#FFF" : "#2C2C2C",
        }}
        className="filter__link"
      >
        Гриль
      </li>
      <li
        onClick={() => dispatch(setCategory("spicy"))}
        style={{
          background: category === "spicy" ? "#282828" : "#F9F9F9",
          color: category === "spicy" ? "#FFF" : "#2C2C2C",
        }}
        className="filter__link"
      >
        Острые
      </li>
      <li
        onClick={() => dispatch(setCategory("closed"))}
        style={{
          background: category === "closed" ? "#282828" : "#F9F9F9",
          color: category === "closed" ? "#FFF" : "#2C2C2C",
        }}
        className="filter__link"
      >
        Закрытые
      </li>
    </div>
  );
};
