// export function usePopularMovies() {
//   const data = fetch(
//     `${process.env.API_MOVIE_URL}/popular?language=en-US&api_key=${process.env.API_KEY}`,
//   );

import { Movie } from "@/app/types";

//   console.log(data);
// }

export const MoviesController = {
  async getPopularMovies() {
    const response = await fetch(
      `${process.env.API_MOVIE_URL}/popular?language=en-US&api_key=${process.env.API_KEY}`,
    );
    const data = await response.json();

    return data.results as Array<Movie>;
  },

  getPoster(posterPath: string) {
    const url = process.env.API_POSTER_URL;

    const posterUrl = `${url}/${posterPath}`;

    return posterUrl;
  },
};
