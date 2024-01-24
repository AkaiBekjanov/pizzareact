import { useState } from "react";
import "./Header.scss";

// imgs

import logo from "./logo.png";

export const Header = () => {
  const [isActive, setActive] = useState(false);
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img src={logo} alt="logo.png" />
          <div className="header__title">
            <h1>REACT PIZZA</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div
          className={`header__menu ${isActive ? "header__menu_active" : ""}`}
          onClick={() => setActive((prev) => !prev)}
        >
          <div className="header__menu-link"></div>
          <div className="header__menu-link"></div>
          <div className="header__menu-link"></div>
        </div>
        <div className="header__checkout">
          <div className="header__price">520 R</div>
          <svg
            width="1"
            height="25"
            viewBox="0 0 1 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1" height="25" fill="white" fill-opacity="0.25" />
          </svg>

          <div className="header__basket">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33333 16.3334C7.06971 16.3334 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3334 6.33333 16.3334Z"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.3333 16.3334C15.0697 16.3334 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3334 14.3333 16.3334Z"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.78002 5.00002H16.3334L15.2134 10.5934C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82669C4.44466 2.50618 4.28764 2.21185 4.04482 1.99847C3.80201 1.78508 3.48994 1.66718 3.16669 1.66669H1.66669"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            3
          </div>
        </div>
      </div>
    </div>
  );
};
