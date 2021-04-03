import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return(
    <div className={ `navigation ${props.hidden ? '' : 'navigation_open'}` } >
      <div className="navigation__container">
        <button className="navigation__close-button" onClick={props.onClick}></button>
        <nav className="navigation__list">
          <button className="navigation__button"><Link to="/" className="navigation__link">Главная</Link></button>
          <button className="navigation__button"><Link to="/movies" className="navigation__link navigation__link_active">Фильмы</Link></button>
          <button className="navigation__button"><Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link></button>
          <button className="navigation__account-button"><Link to="/profile" className="navigation__link">Аккаунт</Link></button>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
