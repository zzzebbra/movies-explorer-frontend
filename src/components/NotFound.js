import React from 'react';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();
  return(
    <section className="not-found">
      <p className="not-found__title">404</p>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button onClick={history.goBack} className="not-found__link not-found__button">Назад</button>
    </section>
  )
}

export default NotFound
