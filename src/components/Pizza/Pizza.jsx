import { useState } from "react";
import "./Pizza.scss";

export const PizzaCard = ({ img, price, title }) => {
  const [type, setType] = useState("thin");
  const [size, setSize] = useState(26);
  return (
    <div className="pizzaCard">
      <div className="pizzaCard__img">
        <img src={img} alt={img} />
      </div>
      <h1 className="pizzaCard__title">{title}</h1>
      <div className="pizzaCard__typesWrapper">
        <div className="pizzaCard__types">
          <div
            className="pizzaCard__type"
            onClick={() => setType("thin")}
            style={{ background: type === "thin" ? "#FFF" : "" }}
          >
            тонкое
          </div>
          <div
            className="pizzaCard__type"
            onClick={() => setType("traditional")}
            style={{ background: type === "traditional" ? "#FFF" : "" }}
          >
            традиционное
          </div>
        </div>
        <div className="pizzaCard__types">
          <div
            className="pizzaCard__type"
            onClick={() => setSize(26)}
            style={{ background: size === 26 ? "#FFF" : "" }}
          >
            26 см
          </div>
          <div
            className="pizzaCard__type"
            onClick={() => setSize(30)}
            style={{ background: size === 30 ? "#FFF" : "" }}
          >
            30 см
          </div>
          <div
            className="pizzaCard__type"
            onClick={() => setSize(40)}
            style={{ background: size === 40 ? "#FFF" : "" }}
          >
            40 см
          </div>
        </div>
      </div>
      <div className="pizzaCard__bottom">
        <div className="pizzaCard__price">от {price} сомов</div>
        <div className="pizzaCard__addBtn">
          Добавить <span>2</span>
        </div>
      </div>
    </div>
  );
};
