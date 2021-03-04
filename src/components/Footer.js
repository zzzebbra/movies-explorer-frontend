import React from 'react';

function Footer() {
  return(
    <section className="footer">
      <div className="footer__credit">
        <p className="footer__credit-names">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className="footer__copyright">
        <p className="footer__copyright-text">© 2020</p>
        <ul className="footer__copyright-list">
          <a href="#" className="footer__copyright-link"><p className="footer__copyright-text">Яндекс.Практикум</p></a>
          <a href="#" className="footer__copyright-link"><p className="footer__copyright-text">Github</p></a>
          <a href="#" className="footer__copyright-link"><p className="footer__copyright-text">Facebook</p></a>
        </ul>
      </div>
    </section>
  )
}

export default Footer
