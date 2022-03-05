import React from 'react';

function SearchForm(props) {

  const [searchString, setSearchString] = React.useState('');

  function onClick(evt) {
    evt.preventDefault();
    props.onSearchClick(searchString)
  }
  return (
    <section className="searchform">
      <form onSubmit={onClick} className="searchform__wrapper" >
        <button className="searchform__icon"></button>
        <input
        required={true}
        className="searchform__input"
        type="text"
        placeholder="Фильм"
        value={searchString}
        onChange={(evt) => setSearchString(evt.target.value)}
        ></input>
        <button type="submit" onClick={onClick} className="searchform__button">Найти</button>
      </form>
    </section>
  )
}

export default SearchForm
