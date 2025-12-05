import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Search.module.css";
import { getMovieSearch } from "@/lib/api";
import Head from "next/head";

export async function getServerSideProps(context) {
  const q = context.query["q"];
  try {
    const res = await getMovieSearch({ id: q });
    const movies = res.results ?? [];
    return {
      props: {
        movies,
        q,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default function Search({ q, movies }) {
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
