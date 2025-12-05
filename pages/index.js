import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import { getMovieItems } from "@/lib/api";

export async function getStaticProps() {
  try {
    const res = await getMovieItems();
    const movies = res.results ?? [];
    return {
      props: {
        movies,
      },
      revalidate: 60,
    };
  } catch (error) {
    return { notFound: true };
  }
}
export default function Home({ movies }) {
  return (
    <>
      <SearchForm />
      <MovieList className={styles.movieList} movies={movies} />
    </>
  );
}
