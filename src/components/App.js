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
import ProtectedRoute from './ProtectedRoute';
import mainApi from '../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loggedUser, setLoggedUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const history = useHistory();

  function moviesConverter(movies) {
    return(
      movies.map((movie) => {
        return {
          nameRU: movie.nameRU || "",
          nameEN: movie.nameEN || "",
          director: movie.director || "",
          country: movie.country || "",
          description: movie.description || "",
          movieId: movie.id || "",
          duration: movie.duration || "",
          year: movie.year || "",
          image: movie.image || "",
          trailerLink: movie.trailerLink || "",
        };
      })
    );
  }

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      mainApi.getUserInfo(localStorage.getItem('token')).then((res) => onAuth(res));
      mainApi.getUserInfo(localStorage.getItem('token'))
        .then((res) => {
          setCurrentUser(res.data);
        })
      .then(() => {
       if(localStorage.getItem('localMovies')) { setMovies(JSON.parse(localStorage.getItem('localMovies')))}
      })
    }
      mainApi.getSavedMovies(localStorage.getItem('token'))
      .then((res) => {
        setSavedMovies(res.data);
      });
  }, [isLoggedIn]);



  function handleLoggedIn() {
    setIsLoggedIn(true);
  }

  function register({ name, email, password  }) {
    mainApi.signup(name, email, password )
      .then((res) => {
        //if (res.data) { setOperationStatus(true); } else { setOperationStatus(false);  };
        login({ email, password });
      })
      .catch((err) => { console.log(err) });
  }

  function onAuth(res) {
    setIsLoggedIn(true);
    setLoggedUser({ email: res.data.email, _id: res.data._id, name: res.data.name });
    history.push('/movies');
  }

  function login({ email, password }) {
    mainApi.login(email, password )
      .then((res) => {
        localStorage.setItem('token', res.token);
        mainApi.getUserInfo(res.token)
          .then((res) => { onAuth(res); });
      })
      .catch((err) => { console.log(err)  });
  }

  function onLogout() {
    setIsLoggedIn(false);
    setLoggedUser({});
    localStorage.removeItem('token');
    localStorage.removeItem('localMovies');
    history.push('/')
  }

  function handleUpdateUser(props) {
    mainApi.setUserInfo(localStorage.getItem('token'), props.username, props.email)
      .then((res) => {
        setCurrentUser(res.data);
      });
  }

  return(
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Route exact path="/">
          <Header
            loggedIn={isLoggedIn}
            link="/signup"
            text="Регистрация"
            buttonText="Войти"
          />
          <Main />
        </Route>

        <Switch>
          <ProtectedRoute path="/movies"
          loggedIn={isLoggedIn}
          component={Header}
          link="/saved-movies"
          buttonLink="/profile"
          text="Фильмы"
          saved="Сохранённые фильмы"
          buttonText="Аккаунт"
          inactiveSavedFilmsClass="header__text_inactive"
          component2={Movies}
          movies={movies}
          setMovies={setMovies}
          moviesConverter={moviesConverter}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
          >
          </ProtectedRoute >

          <ProtectedRoute path="/saved-movies"
          component={Header}
          loggedIn={isLoggedIn}
          link="/movies"
          buttonLink="/profile"
          text="Фильмы"
          saved="Сохранённые фильмы"
          buttonText="Аккаунт"
          inactiveFilmsClass="header__text_inactive"
          component2={SavedMovies}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
          >
          </ProtectedRoute >

          <Route path="/profile">
            <Header
              loggedIn={isLoggedIn}
              link="/movies"
              buttonLink="/profile"
              text="Фильмы"
              saved="Сохранённые фильмы"
              buttonText="Аккаунт"
              inactiveSavedFilmsClass="header__text_inactive"
              inactiveFilmsClass="header__text_inactive"
              />
            <Profile
              username={loggedUser.name}
              email={loggedUser.email}
              onClick={onLogout}
              onEdit={handleUpdateUser}
            />
          </Route >

          <Route path="/signup" >
            <Register
              link="/signin"
              title="Добро пожаловать!"
              button="Зарегистрироваться"
              link_text="Войти"
              text="Уже зарегистрированы? "
              onSubmit={register}
              handleLogin={handleLoggedIn}
            />
          </Route >

          <Route path="/signin">
            <Login
              link="/signup"
              title="Рады видеть!"
              button="Войти"
              text="Ещё не зарегистрированы? "
              link_text = "Регистрация"
              onSubmit={login}
              handleLogin={handleLoggedIn}
            />
          </Route >
        </Switch>

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
