import React from 'react';
import { useLocation } from 'react-router-dom';

const baseUrl = "https://api.nomoreparties.co";

function MoviesCard(props) {
  const [hours, setHours] = React.useState('');
  const [minutes, setMinutes] = React.useState('');

  const location = useLocation();

  const isLiked = props.savedMovies.some((item) => item.movieId === props.card.movieId );

  let cardLikeButtonClassName = `${isLiked ? 'movie-card__like_active' : 'movie-card__like'}`;

  function handleCardDelete() {
    props.onCardDelete(props.card);
  }

  function handleLikeClick() {
   const isLiked = props.savedMovies.some((item) => item.movieId === props.card.movieId );
    props.onCardLike(props.card, isLiked);
  }

  function onClick() {
    window.open( props.card.trailerLink, "_blank")
  }

  React.useEffect(
  function timeConverter() {
    const duration = props.duration;
    const hours = Math.floor(duration/60);
    const minutes = duration-(60*hours);
    setHours(hours);
    setMinutes(minutes);
  });

  if (location.pathname === "/saved-movies") {

    return(
      <div className="movie-card">
        <img onClick={onClick} src={ props.image ? props.image : ''} className="movie-card__img" alt="Постер фильма"></img>
        <p className="movie-card__title">{props.name}</p>
        <button onClick={handleCardDelete} className="movie-card__delete-button"></button>
        <p className="movie-card__duration">{hours}ч {minutes}м</p>
      </div>
    )

  }
    return(
      <div className="movie-card">
        <img onClick={onClick} src={ props.image ? `${baseUrl}${props.image.url}` : ''} className="movie-card__img" alt="Постер фильма"></img>
        <p className="movie-card__title">{props.name}</p>
        { <button onClick={handleLikeClick} className={`movie-card__like ${cardLikeButtonClassName}`}></button> }
        <p className="movie-card__duration">{hours}ч {minutes}м</p>
      </div>
    )

}


export default MoviesCard
