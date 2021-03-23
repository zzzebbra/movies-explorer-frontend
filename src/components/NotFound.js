import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return(
    <section className="not-found">
      <p className="not-found__title">404</p>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="not-found__button"><Link to='#'className="not-found__link">Назад</Link></button>
    </section>
  )
}

export default NotFound
