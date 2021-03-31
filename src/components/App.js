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
    </Route>
      <Main />
      {/* <Movies /> */}
      {/* <SavedMovies /> */}
      {/* <Profile username="Виталий" email="pochta@yandex.ru"/> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <NotFound /> */}
      <Footer />
    </CurrentUserContext.Provider>
    </div>
  )

}

export default App;
