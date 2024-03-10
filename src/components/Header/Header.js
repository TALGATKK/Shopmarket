import React from "react";
import "./Header.css";
import logo from "./logo.png";
import { GiOpenBook } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { LuSmilePlus } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { setSearch, isLoggedIn, setIsLoggedIn } = props;
  return (
    <header>
      <div>
        <span className="logo">
          <img src={logo} alt="aliexpress" />
        </span>
        <Link to="/">
          <button className="catalog-main">
            <GiOpenBook />
            <p className="catalog-text">Каталог</p>
          </button>
        </Link>
        <span className="finder-main">
          <input
            className="finder-input"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск..."
          ></input>
        </span>
        <ul className="nav">
          <li>
            {isLoggedIn ? (
              <Link to="/order">
                <button className="button-order">
                  <BsBoxSeam /> Заказы
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="button-login">
                  <BsBoxSeam /> Заказы
                </button>
              </Link>
            )}
          </li>
          <li>
            {isLoggedIn ? (
              <Link to="/cart">
                <button className="button-shop-cart">
                  <RiShoppingCart2Fill /> Корзина
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="button-login">
                  <RiShoppingCart2Fill /> Корзина
                </button>
              </Link>
            )}
          </li>
          <li>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                }}
                className="button-logout"
              >
                <VscAccount /> Выйти
              </button>
            ) : (
              <Link to="/login">
                <button className="button-login">
                  <LuSmilePlus /> Войти
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
