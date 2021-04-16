import React from 'react';
import SearchForm from './SearchForm';
import FilterCheckbox from './FilterCheckbox';
import Preloader from './Preloader';
import MoviesCardList from './MoviesCardList';
import LoadMore from './LoadMore';
import moviesApi from '../utils/MoviesApi';
import NoResults from './NoResults';

function Movies(props) {

  const [isSearched, setIsSearched] = React.useState(false);
 // const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showLoadMore,setshowLoadMore]=React.useState(true);
  const [showNoResults, setShowNoResults] =React.useState(false);
  const [checkboxState, setCheckboxState] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(12);
  const cardsPerStep = 3;

  function loadMore() {
    setCurrentIndex(currentIndex + cardsPerStep);
  }

  React.useEffect(() => {
    if(checkboxState){
      props.movies.filter((movie)=> movie.duration <= 40).length <= currentIndex
      ? setshowLoadMore(false)
      : setshowLoadMore(true);
    }

    else {
        props.movies.length <= currentIndex //
          ? setshowLoadMore(false)
          : setshowLoadMore(true);
        }
    }, [currentIndex, props.movies.length, checkboxState]);

React.useEffect(()=> {
  if(localStorage.getItem('localMovies')) {
    props.setMovies(
      JSON.parse(localStorage.getItem('localMovies'))

      ); setIsSearched(true)}
},[])


  function searchAlg(array, searchString) {
    const arrayOfStrings = array.map((movie) => JSON.stringify(movie));
    const res = [];
    arrayOfStrings.forEach((string) => { if (string.toLowerCase().includes(searchString.toLowerCase())) { res.push(string) } });
    return res.map((string) => JSON.parse(string));
  }

  function onSearchClick(searchString) {
    setShowNoResults(false);
    setIsLoading(true);
    moviesApi.getMovies()
       .then((res) => {
        const moviesToRender = searchAlg(props.moviesConverter(res), searchString)

        if(moviesToRender.length === 0) { setShowNoResults(true)}
        props.setMovies(moviesToRender);
        localStorage.setItem('localMovies', JSON.stringify(moviesToRender));
        setIsSearched(true);
       }).finally(()=>setIsLoading(false))
      }

  function onCheckboxClick() {
    setCheckboxState(!checkboxState);
  }

  if(checkboxState) {
    return (
      <section className="movies">
        <SearchForm onSearchClick={onSearchClick} />
        {isSearched && <FilterCheckbox onClick={onCheckboxClick} />}
        {isLoading && <Preloader /> }
        {showNoResults && <NoResults />}
        {isSearched && <MoviesCardList movies={props.movies.filter((movie)=> movie.duration <= 40).slice(0, currentIndex)} setMovies={props.setMovies} savedMovies={props.savedMovies} setSavedMovies={props.setSavedMovies} />}
        {showLoadMore && isSearched && <LoadMore />}
      </section>
    )
  }

    return (
      <section className="movies">
        <SearchForm onSearchClick={onSearchClick} />
        {isSearched && <FilterCheckbox onClick={onCheckboxClick} movies={props.movies} />}
        {isLoading &&  <Preloader /> }
        {showNoResults && <NoResults />}
        {isSearched && <MoviesCardList movies={props.movies.slice(0, currentIndex)} setMovies={props.setMovies} savedMovies={props.savedMovies} setSavedMovies={props.setSavedMovies} />}
        {showLoadMore && isSearched && <LoadMore loadMore={loadMore}  />}

      </section>
    )

}

export default Movies
