import React from 'react';
import SearchForm from './SearchForm';
import FilterCheckbox from './FilterCheckbox';
import Preloader from './Preloader';
import MoviesCardList from './MoviesCardList';
import LoadMore from './LoadMore';

function Movies() {
  return(
    <section className="movies">
      <SearchForm />
      <FilterCheckbox />
      {/* <Preloader /> */}
      <MoviesCardList />
      <LoadMore />
    </section>
  )

}

export default Movies
