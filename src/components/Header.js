import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import menuButton from '../images/burger-menu-icon.svg';
import Navigation from './Navigation';

function Header(props) {

  const [isHidden, setIsHidden] = React.useState(true);
  const [isMenuHidden, setIsMenuHidden] = React.useState(false);
  //const [isCloseButtonHidden, setCloseButtonHidden] = React.useState(true);
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

  // хэдэр при бургер-меню (недоделан)
  if(windowWidth<=1166) {
    return (
      <div className="header">
        <Link to="/"><img className="logo" src={logo} alt="Логотип"/></Link>
        <button className="menu-button" onClick={handleVisible}></button>
        <Navigation hidden = {isHidden} onClick={handleVisible}/>
        {/* <div className="header__links-wrapper">
          <Link to={props.link} hidden = {isHidden} className="header__register-link"><p className="header__text">{props.text}</p></Link>
          <button  className="header__login-button"><Link to={props.buttonLink} className="header__login-link"><p className="header__text">{props.buttonText}</p></Link></button>
        </div> */}
      </div>
    )
  }

  return (
    <div className="header">
      <Link to="/"><img className="logo" src={logo} alt="Логотип"/></Link>
      <div className="header__links-wrapper">
        <Link to={props.link} className="header__register-link"><p className="header__text">{props.text}</p></Link>
        <button className="header__login-button"><Link to={props.buttonLink} className="header__login-link"><p className="header__text">{props.buttonText}</p></Link></button>
      </div>
    </div>
  )
  // хэдэр при поиске фильмов
  // return (
  //   <div className="header">
  //     <Link to="/"><img className="logo" src={logo} alt="Логотип"/></Link>
  //     <div className="header__links-wrapper">
  //       <Link to={props.link} className="header__search-link"><p className="header__text">{props.text}</p></Link>
  //       <Link to="saved-movies" className="header__saved-films-link"><p className="header__text header__text_inactive">{props.text2}</p></Link>
  //       <button className="header__profile-button"><Link to={props.buttonLink} className="header__profile-link"><p className="header__profile-button-text">{props.buttonText}</p></Link></button>
  //     </div>
  //   </div>
  // )
}

export default Header
