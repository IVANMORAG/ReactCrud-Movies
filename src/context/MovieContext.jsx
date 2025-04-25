import { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState({ title: '', genre: '' });

  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    const storedFavorites = localStorage.getItem('favorites');
    
    if (storedMovies) setMovies(JSON.parse(storedMovies));
    if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [movies, favorites]);

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
  };

  const updateMovie = (id, updatedMovie) => {
    setMovies(movies.map(movie => movie.id === id ? updatedMovie : movie));
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
    setFavorites(favorites.filter(favId => favId !== id));
  };

  const toggleFavorite = (id) => {
    setFavorites(favorites.includes(id) 
      ? favorites.filter(favId => favId !== id) 
      : [...favorites, id]);
  };

  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(filter.title.toLowerCase());
    const matchesGenre = filter.genre ? movie.genre === filter.genre : true;
    return matchesTitle && matchesGenre;
  });

  return (
    <MovieContext.Provider value={{
      movies: filteredMovies,
      favorites,
      addMovie,
      updateMovie,
      deleteMovie,
      toggleFavorite,
      setFilter
    }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}
