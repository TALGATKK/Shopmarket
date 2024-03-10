import React from "react";
import "./CSS/LoginSignup.css";
import { useNavigate } from "react-router-dom";

export function LoginSignup({ setIsLoggedIn, isLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    setIsLoggedIn(true);
    console.log(isLoggedIn);
    alert("Вы успешно авторизованы!");
    navigate("/");
  };
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Авторизация</h1>
        <form>
          <div className="loginsignup-inputs">
            <input
              type="text"
              name="username"
              placeholder="Логин"
              required=""
            />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              required=""
            />
          </div>
          <button type="submit" onClick={handleLogin}>
            Продолжить
          </button>
        </form>
      </div>
    </div>
  );
}
/* <p className="loginsignup-login">У вас уже есть аккаунт?</p>
        <span>Войти</span>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" /> */
