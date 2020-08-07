import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";

function Banner() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);
  console.log(movie);
  return (
    <React.Fragment>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__content">
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
          {/* Buttons */}
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h4 className="banner__date">Realese Date: {movie.first_air_date}</h4>
          {/* description */}
          <h2 className="banner__desc">{movie?.overview}</h2>
        </div>
        <div className="banner__faded"></div>
      </header>
    </React.Fragment>
  );
}

export default Banner;
