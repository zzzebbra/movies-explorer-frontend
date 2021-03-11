import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import menuButton from '../images/burger-menu-icon.svg';

function Header(props) {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Логотип"/>
      <div className="header__links-wrapper">
        <Link to={props.link} className="header__register-link"><p className="header__text">{props.text}</p></Link>
        <button className="header__login-button"><Link to={props.buttonLink} className="header__login-link"><p className="header__text">{props.buttonText}</p></Link></button>
      </div>
    </div>
  )
  // хэдэр при поиске фильмов
  // return (
  //   <div className="header">
  //     <img className="logo" src={logo} alt="Логотип"/>
  //     <div className="header__links-wrapper">
  //       <Link to={props.link} className="header__search-link"><p className="header__text">{props.text}</p></Link>
  //       <Link to={props.link} className="header__saved-films-link"><p className="header__text header__text_inactive">{props.text2}</p></Link>
  //       <button className="header__profile-button"><Link to={props.buttonLink} className="header__profile-link"><p className="header__profile-button-text">{props.buttonText}</p></Link></button>
  //     </div>
  //   </div>
  // )

  // хэдэр при бургер-меню (недоделан)
  // return (
  //   <div className="header">
  //     <img className="logo" src={logo} alt="Логотип"/>
  //     <img className="menu-button" src={menuButton} alt="Кнопка выпадающего меню"/>
  //     <div className="header__links-wrapper">
  //       <Link to={props.link} className="header__register-link"><p className="header__text">{props.text}</p></Link>
  //       <button className="header__login-button"><Link to={props.buttonLink} className="header__login-link"><p className="header__text">{props.buttonText}</p></Link></button>
  //     </div>
  //   </div>
  // )
}

export default Header
