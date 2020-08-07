import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../axios";
import Loader from "./spinner";
import YoutubeTrailer from "react-youtube";
import movieTrailer from "movie-trailer";

const base_URL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setmovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlPrams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlPrams.get("v"));
        })
        .catch(() => {
          setTrailerURL("pD8JdIOgW4k");
          opts.width = "0px";
          opts.height = "1";
        });
    }
  };

  console.log(trailerURL);

  return (
    <React.Fragment>
      <div className="row">
        <h1 className="row__titele">{title}</h1>
        <div className="row__posters">
          {movies.map((movie) => {
            return (
              <img
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__largePoster"}`}
                src={`${base_URL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            );
          })}
        </div>
        {trailerURL && <YoutubeTrailer videoId={trailerURL} opt={opts} />}
      </div>
    </React.Fragment>
  );
};

export default Row;
