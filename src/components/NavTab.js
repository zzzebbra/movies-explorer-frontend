import React from 'react';
import { Link } from 'react-router-dom';

function NavTab(props) {
  return(
    <div className="navtab">
    <Link to="#" className="navtab__link"><button className="navtab__button">О проекте</button></Link>
    <Link to="#" className="navtab__link"><button className="navtab__button">Технологии</button></Link>
    <Link to="#" className="navtab__link"><button className="navtab__button">Студент</button></Link>
    </div>
  )
}

export default NavTab
