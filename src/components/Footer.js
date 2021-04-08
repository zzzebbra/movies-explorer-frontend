import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return(
    <section className="footer">
      <div className="footer__credit">
        <p className="footer__credit-names">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className="footer__copyright">
        <p className="footer__copyright-text footer__copyright-text_low-resolution">© 2020</p>
        <ul className="footer__copyright-list">
          <Link to="https://praktikum.yandex.ru/" className="footer__copyright-link"><p className="footer__copyright-text">Яндекс.Практикум</p></Link>
          <Link to="https://github.com/zzzebbra" className="footer__copyright-link"><p className="footer__copyright-text">Github</p></Link>
          <Link to="https://ru-ru.facebook.com/" className="footer__copyright-link"><p className="footer__copyright-text">Facebook</p></Link>
        </ul>
      </div>
    </section>
  )
}

export default Footer
