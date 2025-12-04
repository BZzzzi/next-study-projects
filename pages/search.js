import { useRouter } from "next/router";
import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Search.module.css";
import { useEffect, useState } from "react";
import { getMovieSearch } from "@/lib/api";
import Head from "next/head";

export default function Search() {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const q = router.query["q"];

  useEffect(() => {
    if (!q) return;

    async function fetchMovies() {
      const result = await getMovieSearch({ id: q });
      const searchList = result.results ?? [];
      setMovies(searchList);
    }

    fetchMovies();
  }, [q]);

  return (
    <>
      <Head>
        <title>Search Moives</title>
      </Head>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <MovieList movies={movies} />
    </>
  );
}
