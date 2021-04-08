import React from 'react';

function SearchForm() {

  const [movie, setMovie] = React.useState('');

  return (
    <section className="searchform">
      <div className="searchform__wrapper">
        <button className="searchform__icon"></button>
        <input
        required="true"
        className="searchform__input"
        type="text"
        placeholder="Фильм"
        value={movie}
        onChange={(evt) => setMovie(evt.target.value)}
        ></input>
        <button className="searchform__button">Найти</button>
      </div>
    </section>
  )
}

export default SearchForm
