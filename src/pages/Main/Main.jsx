import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Main.scss";
import { Filter } from "../../components/Filter/Filter";
import { useEffect } from "react";
import axios from "axios";
import { update } from "../../redux/slices/goods/goodsSlice";
import { PizzaCard } from "../../components/Pizza/Pizza";
export const Main = () => {
  const cart = useSelector((state) => state.goodsReducer.cart);
  const category = useSelector((state) => state.filterSlice.category);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("http://localhost:3000/pizzas").then((res) => {
      dispatch(update(res.data));
      console.log(res.data);
    });
  }, []);
  return (
    <main className="main">
      <div className="main__nav">
        <Filter />
        <div className="main__sort">
          {/* there is going to be sort type select here */}
        </div>
      </div>
      <div className="main__content">
        <h1 className="main__title">Все пиццы</h1>
        <div className="main__pizzas">
          {cart
            .filter((item) => {
              return category === "all"
                ? item
                : item.category.includes(category);
            })
            .map((item) => (
              <PizzaCard img={item.img} price={item.price} title={item.title} />
            ))}
        </div>
      </div>
    </main>
  );
};
