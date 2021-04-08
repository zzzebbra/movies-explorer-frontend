import React from 'react';
import image from '../images/movie-img.png'

function MoviesCard(props) {

  // лайки
  // if (props.status === "films") {
    return(
      <div className="movie-card">
        <img className="movie-card__img" src={image} alt="Постер фильма"></img>
        <p className="movie-card__title">33 слова о дизайне</p>
        <button className={`movie-card__like ${props.class}`}></button>
        <p className="movie-card__duration">1ч 47м</p>
      </div>
    )
  // "movie-card__like movie-card__like_active"}

  // кнопки удаления
  // //if (props.status === "savedFilms") {
  //   return(
  //     <div className="movie-card">
  //       <img className="movie-card__img" src={image} alt="Постер фильма"></img>
  //       <p className="movie-card__title">33 слова о дизайне</p>
  //       <button className="movie-card__delete-button"></button>
  //       <p className="movie-card__duration">1ч 47м</p>
  //     </div>
  //   )
  // //}
}


export default MoviesCard
