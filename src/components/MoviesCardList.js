import React from 'react';
import mainApi from '../utils/MainApi';
import MoviesCard from './MoviesCard';

const baseUrl = "https://api.nomoreparties.co";

function MoviesCardList(props) {

  function onCardLike(card, isLiked) {
    if (isLiked) {
      mainApi.getSavedMovies(localStorage.getItem('token')).then((res) => {
        return res.data.find((i) => (i.movieId === card.movieId))
      }).then((res) => mainApi.deleteSavedMovie(localStorage.getItem('token'), res._id))
      .then(() =>
        mainApi.getSavedMovies(localStorage.getItem('token'))
          .then((res) => {
            props.setSavedMovies(res.data);
          }))
    }
    else {
    mainApi.addSavedMovie(localStorage.getItem('token'), card.country, card.director, card.duration, card.year, card.description, `${baseUrl}${card.image.url}`, card.trailerLink, `${baseUrl}${card.image.formats.thumbnail.url}`, card.owner, card.movieId, card.nameRU, card.nameEN)
      .then(() =>
        mainApi.getSavedMovies(localStorage.getItem('token'))
          .then((res) => {
            props.setSavedMovies(res.data);
          }))
        }
  }
  function onCardDelete(card) {
    mainApi.getSavedMovies(localStorage.getItem('token')).then((res) => {
      return res.data.find((i) => (i.movieId === card.movieId))
    }).then((res) => mainApi.deleteSavedMovie(localStorage.getItem('token'), res._id))
    .then(() =>
      mainApi.getSavedMovies(localStorage.getItem('token'))
        .then((res) => {
          props.setSavedMovies(res.data);
        }))
  }



  const movies = props.movies;

    return (
      <section className="movies-card-list">
        {movies.map((movie) => (
          <MoviesCard
            card={movie}
            onCardDelete={onCardDelete}
            onCardLike={onCardLike}
            key={movie.movieId}
            image={movie.image ? movie.image : ''}
            name={movie.nameRU}
            duration={movie.duration}
            savedMovies={props.savedMovies}
          />
          )
        )}
      </section>
    )

}

export default MoviesCardList
