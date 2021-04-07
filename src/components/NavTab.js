import React from 'react';
import { Link } from 'react-router-dom';

function NavTab(props) {
  return(
    <div className="navtab">
    <Link to="#" className="navtab__link"><p className="navtab__text">О проекте</p></Link>
    <Link to="#" className="navtab__link"><p className="navtab__text">Технологии</p></Link>
    <Link to="#" className="navtab__link"><p className="navtab__text">Студент</p></Link>
    </div>
  )
}

export default NavTab
