import React from 'react';
import MoviesCard from './MoviesCard';

function MoviesCardList(params) {
  return (
    <section className="movies-card-list">
      <MoviesCard class="movie-card__like_active"/>
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
    </section>
  )
}

export default MoviesCardList
