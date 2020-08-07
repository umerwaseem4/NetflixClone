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
        {/* description */}
        <h1 className="banner__desc">{movie?.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
