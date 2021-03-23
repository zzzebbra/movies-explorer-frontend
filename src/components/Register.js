import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Register(props) {
  const welcome = "Добро пожаловать!";
  const buttonText = "Зарегистрироваться";
  const registerText = "Уже зарегистрированы? ";
  const linkText = "Войти";

  return(
    <section className="register">
      <img className="logo" src={logo} alt="Логотип"/>
      <h1 className="register__title">{welcome}</h1>
      <form className="form">
        <p className="form__input-text">Имя</p>
        <input className="form__input"></input>
        <p className="form__error"></p>
        <p className="form__input-text">E-mail</p>
        <input className="form__input"></input>
        <p className="form__error"></p>
        <p className="form__input-text">Пароль</p>
        <input className="form__input"></input>
        <p className="form__error">Что-то пошло не так...</p>
        <button className="form__submit-button">{buttonText}</button>
        <p className="form__text">{registerText}<Link to="#" className="form__link">{linkText}</Link></p>
      </form>

    </section>
  )
}

export default Register
