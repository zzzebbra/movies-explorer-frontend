import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Login(props) {
  const title = "Рады видеть!";
  const buttonText = "Войти";
  const registerText = "Ещё не зарегистрированы? ";
  const linkText = "Регистрация";

  return (
    <section className="login">
      <img className="logo" src={logo} alt="Логотип"/>
      <form className="form">
        <h1 className="form__title">{title}</h1>
        <p className="form__input-text">E-mail</p>
        <input className="form__input"></input>
        <p className="form__error"></p>
        <p className="form__input-text">Пароль</p>
        <input className="form__input"></input>
        <p className="form__error"></p>
        <button className="form__submit-button form__submit-button_low-resolution">{buttonText}</button>
        <p className="form__text">{registerText}<Link to={props.link} className="form__link">{linkText}</Link></p>
      </form>
    </section>
  )
}

export default Login
