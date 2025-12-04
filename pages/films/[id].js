import { useRouter } from "next/router";
import MovieReviewList from "@/components/MovieReviewList";
import styles from "@/styles/Movie.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getMovieItem, getMovieReviews } from "@/lib/api";
import Head from "next/head";

const labels = {
  rating: {
    12: "12세이상관람가",
    15: "15세이상관람가",
    19: "청소년관람불가",
    all: "전체관람가",
  },
};

export default function Movie() {
  const router = useRouter();
  const id = router.query["id"];
  const [movie, setMovie] = useState(null);
  const [review, setReview] = useState([]);

  useEffect(() => {
    if (!id) return;
    async function fetchMovies() {
      const result = await getMovieItem({ id });
      setMovie(result ?? null);
    }
    fetchMovies();
  }, [id]);

  useEffect(() => {
    if (!id) return;
    async function fetchMovieReviews() {
      const result = await getMovieReviews({ id });
      setReview(result ?? []);
    }
    fetchMovieReviews();
  }, [id]);
  if (!movie) return null;

  return (
    <>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <div className={styles.header}>
        <Image
          className={styles.poster}
          src={movie.posterUrl}
          width={200}
          height={500}
          alt={movie.title}
        />
        <div className={styles.info}>
          <div className={styles.englishTitle}>{movie.englishTitle}</div>
          <h1 className={styles.title}>{movie.title}</h1>
          <table className={styles.infoTable}>
            <tbody>
              <tr>
                <th>개봉</th>
                <td>{movie.date}</td>
              </tr>
              <tr>
                <th>장르</th>
                <td>{movie.genre}</td>
              </tr>
              <tr>
                <th>국가</th>
                <td>{movie.country}</td>
              </tr>
              <tr>
                <th>등급</th>
                <td>{labels.rating[movie.rating]}</td>
              </tr>
              <tr>
                <th>러닝타임</th>
                <td>{movie.runningTime}분</td>
              </tr>
              <tr>
                <th>평점</th>
                <td className={styles.starRating}>★{movie.starRating}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>소개</h2>
        <p className={styles.description}>{movie.description}</p>
        <span className={styles.readMore}>더보기</span>
      </section>
      <div className={styles.reviewSections}>
        <section>
          <h2 className={styles.sectionTitle}>내 리뷰 작성하기</h2>
        </section>
        <section>
          <h2 className={styles.sectionTitle}>리뷰</h2>
          <MovieReviewList movieReviews={review.results} />
        </section>
      </div>
    </>
  );
}
