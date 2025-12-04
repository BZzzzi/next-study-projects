import axios from "@/lib/axios";

export async function getMovieItems() {
  const res = await axios.get(`/movies`);
  return res.data;
}

export async function getMovieItem({ id }) {
  const res = await axios.get(`/movies/${id}`);
  return res.data;
}

export async function getMovieSearch({ id }) {
  const res = await axios.get(`/movies/?q=${id}`);
  return res.data;
}

export async function getMovieReviews({ id }) {
  const res = await axios.get(`/movie_reviews/?movie_id=${id}`);
  return res.data;
}
