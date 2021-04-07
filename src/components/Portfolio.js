import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  return(
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__links">
        <Link className="portfolio__link" to="#"><p className="portfolio__link-text">Статичный сайт</p><p className="portfolio__link-text portfolio__link-arrow">↗</p></Link>
        <Link className="portfolio__link" to="#"><p className="portfolio__link-text">Адаптивный сайт</p><p className="portfolio__link-text portfolio__link-arrow">↗</p></Link>
        <Link className="portfolio__link" to="#"><p className="portfolio__link-text">Одностраничное приложение</p><p className="portfolio__link-text portfolio__link-arrow">↗</p></Link>
      </div>
    </section>
  )
}
export default Portfolio
