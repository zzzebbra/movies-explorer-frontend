import React from 'react';

function Portfolio() {
  return(
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__links">
        <button className="portfolio__link" href="#"><p className="portfolio__link-text">Статичный сайт</p><p className="portfolio__link-text portfolio__link-arrow">↗</p></button>
        <button className="portfolio__link" href="#"><p className="portfolio__link-text">Адаптивный сайт</p><p className="portfolio__link-text portfolio__link-arrow">↗</p></button>
        <button className="portfolio__link" href="#"><p className="portfolio__link-text">Одностраничное приложение</p><p className="portfolio__link-text portfolio__link-arrow">↗</p></button>
      </div>
    </section>
  )
}
export default Portfolio
