import React from 'react';
import MoviesCardList from './MoviesCardList';
import LoadMore from './LoadMore';
import SearchForm from './SearchForm';
import deleteButton from '../images/delete-fav-film.svg';

function SavedMovies(props) {
  return(
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList />
      {/* <LoadMore /> */}
    </section>
  )
}

export default SavedMovies
