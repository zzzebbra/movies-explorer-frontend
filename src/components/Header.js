import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import menuButton from '../images/burger-menu-icon.svg';
import Navigation from './Navigation';

function Header(props) {

  const [isHidden, setIsHidden] = React.useState(true);
  const [isMenuHidden, setIsMenuHidden] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(document.documentElement.clientWidth);

  function handleVisible() {
    setIsHidden(!isHidden)
    setIsMenuHidden(!isMenuHidden)
  }

  React.useEffect(() => {
    const changeWindowWidth = () => {
      setWindowWidth(document.documentElement.clientWidth);
    }
    window.addEventListener('resize', changeWindowWidth);
    return () => {
    window.removeEventListener('resize', changeWindowWidth);
    }
  })

  // хэдэр при бургер-меню
  if(windowWidth<=768 && props.loggedIn) {
    return (
      <div className="header">
        <Link to="/"><img className="logo" src={logo} alt="Логотип"/></Link>
        <button className="menu-button" onClick={handleVisible}></button>
        <Navigation hidden = {isHidden} onClick={handleVisible}/>
      </div>
    )
  }

  if (props.loggedIn) {
    return (
      <div className="header">
      <Link to="/"><img className="logo" src={logo} alt="Логотип"/></Link>
      <div className="header__links-wrapper">
        <Link to={props.link} className="header__search-link"><p className={`header__text ${props.inactiveFilmsClass}`}>{props.text}</p></Link>
        <Link to="/saved-movies" className="header__saved-films-link"><p className={`header__text ${props.inactiveSavedFilmsClass}`}>{props.saved}</p></Link>
         <button className="header__profile-button"><Link to={props.buttonLink} className="header__profile-link"><p className="header__profile-button-text">{props.buttonText}</p></Link></button>
      </div>
     </div>
    )
  }
  // подумать получше
  return (
    <div className="header">
      <Link to="/"><img className="logo" src={logo} alt="Логотип"/></Link>
      <div className="header__links-wrapper">
        <Link to={props.link} className="header__register-link"><p className="header__text">{props.text}</p></Link>
        <Link to="/signin" className="header__login-link"><p className="header__text">{props.buttonText}</p></Link>
      </div>
    </div>
  )

}

export default Header
