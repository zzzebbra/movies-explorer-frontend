import React from 'react';
import MoviesCardList from './MoviesCardList';
import SavedMoviesHeader from './SavedMoviesHeader';
import LoadMore from './LoadMore';

function SavedMovies(props) {
  return(
    <section className="saved-movies">
      <SavedMoviesHeader
        link="#"
        buttonLink="#"
        text="Регистрация"
        text2="Сохранённые фильмы"
        buttonText="Войти"
      />
      <MoviesCardList />
      {/* <LoadMore /> */}
    </section>
  )
}

export default SavedMovies
