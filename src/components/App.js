import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import  '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Movies from './Movies';
import SavedMovies from './SavedMovies';
import Profile from './Profile';
import NotFound from './NotFound';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  function handleLoggedIn() {
    setIsLoggedIn(true);
  }

  return(
    <div className="page">
    <CurrentUserContext.Provider value={currentUser}>
    <Route exact path="/">
      <Header
      link="#"
      buttonLink="#"
      text="Регистрация"
      text2="Сохранённые фильмы"
      buttonText="Войти"
      />
      <Main />
    </Route >

    <Route exact path="/movies">
      <Header
        link="#"
        buttonLink="#"
        text="Регистрация"
        text2="Сохранённые фильмы"
        buttonText="Войти"
        />
      <Movies />
    </Route >

    <Route exact path="/saved-movies">
      <SavedMovies />
    </Route >

    <Route exact path="/profile">
      <Profile username="Виталий" email="pochta@yandex.ru"/>
    </Route >

    <Route exact path="/signup" >
      <Register
      link="/signin"/>
    </Route >

    <Route exact path="/signin">
      <Login
      link="/signup"
      />
    </Route >

    {/* <Route path="/*">
      <NotFound />
    </Route > */}

    <Route path="/">
      <Footer />
    </Route >
    </CurrentUserContext.Provider>
    </div>
  )

}

export default App;
