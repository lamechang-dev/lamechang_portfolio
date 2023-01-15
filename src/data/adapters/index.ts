import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

export const baseApiClient = applyCaseMiddleware(axios.create());

// SSR only
export const tmdbApiClient = applyCaseMiddleware(
  axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      apiKey: process.env.TMDB_API_KEY,
      language: "en-US",
      sessionId: process.env.TMDB_SESSION_KEY,
    },
  })
);

