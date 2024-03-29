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
          <a href="https://praktikum.yandex.ru/" className="footer__copyright-link" target="_blank" rel="noreferrer"><p className="footer__copyright-text">Яндекс.Практикум</p></a>
          <a href="https://github.com/zzzebbra" className="footer__copyright-link" target="_blank" rel="noreferrer"><p className="footer__copyright-text">Github</p></a>
          <a href="https://ru-ru.facebook.com/" className="footer__copyright-link" target="_blank" rel="noreferrer"><p className="footer__copyright-text">Facebook</p></a>
        </ul>
      </div>
    </section>
  )
}

export default Footer
