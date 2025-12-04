import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { getMovieItems } from "@/lib/api";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const result = await getMovieItems();
      const movieList = result.results ?? [];
      setMovies(movieList);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <SearchForm />
      <MovieList className={styles.movieList} movies={movies} />
    </>
  );
}
