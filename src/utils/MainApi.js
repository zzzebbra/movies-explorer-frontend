const baseUrl = "http://zzzebbra.students.nomoredomains.rocks";
//const baseUrl = 'http://localhost:3000';

const handleOriginalResponse = (res) => {
  if (!res.ok) {
    return Promise.reject("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
  }
  return res.json();
};

class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  signup(name, email, password) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then(handleOriginalResponse);
  }

  login(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: 'include',
    })
      .then(handleOriginalResponse);
  }

  getUserInfo(jwt) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(handleOriginalResponse);
  }

  setUserInfo(jwt, name, email) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
      }),
      credentials: 'include',
    })
      .then(handleOriginalResponse);
  }

  getSavedMovies(jwt) {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(handleOriginalResponse);
  }

  addSavedMovie(jwt, country, director, duration, year, description, image, trailerLink, thumbnail, owner, movieId, nameRU, nameEN ) { // нужна  вся карточка
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country, director, duration, year, description, image, trailerLink, thumbnail, owner, movieId, nameRU, nameEN
      }),
      credentials: 'include',
    })
      .then(handleOriginalResponse);
  }

  deleteSavedMovie(jwt, movieId) {
    return fetch(`${this.baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(handleOriginalResponse);
  }

}


const mainApi = new Api(baseUrl);

export default mainApi;
