import React from 'react';
import MoviesCardList from './MoviesCardList';
import SearchForm from './SearchForm';
import FilterCheckbox from './FilterCheckbox';
//import NoResults from './NoResults';

function SavedMovies(props) {
const [isSearched,setIsSearched] = React.useState(false);
const [moviesToRender, setMoviesToRender] = React.useState([]);
const [checkboxState, setCheckboxState] = React.useState(false);
//const [showNoResults, setShowNoResults] =React.useState(false);

  function searchAlg(array, searchString) {
    const arrayOfStrings = array.map((movie) => JSON.stringify(movie));
    const res = [];
    arrayOfStrings.forEach((string) => { if (string.toLowerCase().includes(searchString.toLowerCase())) { res.push(string) } });
    return res.map((string) => JSON.parse(string));
  }

  function onSearchClick(searchString) {
    // setShowNoResults(false);
    // if(moviesToRender.length === 0) { setShowNoResults(true)}
    setMoviesToRender(searchAlg(props.savedMovies, searchString));
    setIsSearched(true);
  }

  function onCheckboxClick() {
    setCheckboxState(!checkboxState);
  }

  if(checkboxState) {
    return(
      <section className="saved-movies">
        <SearchForm onSearchClick={onSearchClick} />
        <FilterCheckbox onClick={onCheckboxClick} />
        {/* {showNoResults && <NoResults />} */}
        <MoviesCardList movies={props.savedMovies.filter((movie)=> movie.duration <= 40)} savedMovies={props.savedMovies} setSavedMovies={props.setSavedMovies} />
      </section>
    )
  }

  if(isSearched){
    return(
      <section className="saved-movies">
        <SearchForm onSearchClick={onSearchClick} />
        <FilterCheckbox onClick={onCheckboxClick} />
        {/* {showNoResults && <NoResults />} */}
        <MoviesCardList movies={moviesToRender} savedMovies={props.savedMovies} setSavedMovies={props.setSavedMovies} />
      </section>
    )
  }
  return(
    <section className="saved-movies">
      <SearchForm onSearchClick={onSearchClick} />
      <FilterCheckbox onClick={onCheckboxClick}/>
      {/* {showNoResults && <NoResults />} */}
      <MoviesCardList movies={props.savedMovies} savedMovies={props.savedMovies} setSavedMovies={props.setSavedMovies} />
    </section>
  )
}

export default SavedMovies
