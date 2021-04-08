const baseUrl = "https://api.nomoreparties.co/beatfilm-movies";

const handleOriginalResponse = (res) => {
  if (!res.ok) {
    return Promise.reject("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
  }
  return res.json();
};

class MoviesApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(handleOriginalResponse);
  }


}

const moviesApi = new MoviesApi(baseUrl);

export default moviesApi;
