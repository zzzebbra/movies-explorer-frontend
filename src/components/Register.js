import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Register(props) {
  const welcome = "Добро пожаловать!";
  const buttonText = "Зарегистрироваться";
  const registerText = "Уже зарегистрированы?";
  const linkText = "Войти";

  return(
    <section className="register">
      <img className="logo" src={logo} alt="Логотип"/>
      <h1 className="register__title">{welcome}</h1>
      <form className="register__form">
        <p className="register__form-text"></p>
        <input className="register__form-input"></input>
        <p className="register__form-error"></p>
        <p className="register__form-text"></p>
        <input className="register__form-input"></input>
        <p className="register__form-error"></p>
        <p className="register__form-text"></p>
        <input className="register__form-input"></input>
        <p className="register__form-error"></p>
        <button className="register__form-submit-button">{buttonText}</button>
      </form>
      <p className="register__text">{registerText}</p><Link to="#" className="register__login-link">{linkText}</Link>
    </section>
  )
}

export default Register
