import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../axios";
import Loader from "./spinner";

const base_URL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <React.Fragment>
      <div className="row">
        <h1>{title}</h1>
        <div className="row__posters">
          {movies.map((movie) => {
            return (
              <img
                className={`row__poster ${isLargeRow && "row__largePoster"}`}
                src={`${base_URL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Row;
