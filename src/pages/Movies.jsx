import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByName } from 'Sevices/Api';
import css from './Pages.module.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [seacrhParams, setSearchParams] = useSearchParams();
  const query = seacrhParams.get('query');

  const handleSubmit = element => {
    element.preventDefault();
    setSearchParams({ query: searchQuery });
  };
  useEffect(() => {
    (async () => {
      if (!query) {
        return;
      }
      const response = await searchMoviesByName(query);
      setMovies(response);
    })();
  }, [query]);

  return (
    <div className={css.wrapperTitle}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your query here, please"
          onChange={element => setSearchQuery(element.target.value)}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
