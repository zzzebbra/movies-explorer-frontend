import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import menuButton from '../images/burger-menu-icon.svg';

function SavedMoviesHeader(props) {

  // хэдэр при сохранённых фильмах
  return (
    <section className="header">
      <Link to="/"><img className="logo" src={logo} alt="Логотип"/></Link>
      <div className="header__links-wrapper">
        <Link to={props.link} className="header__search-link"><p className="header__text header__text_inactive">{props.text}</p></Link>
        <Link to="saved-movies" className="header__saved-films-link"><p className="header__text">{props.text2}</p></Link>
        <button className="header__profile-button"><Link to={props.buttonLink} className="header__profile-link"><p className="header__profile-button-text">{props.buttonText}</p></Link></button>
      </div>
    </section>
  )
}

export default SavedMoviesHeader
