import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../requests";
function Banner() {
  const [singleMovie, setSingleMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(requests.fetchNetflixOriginals);
      setSingleMovie(
        result?.data.results[
          Math.floor(Math.random() * result.data.results.length)
        ]
      );
      return result;
    }
    fetchData();
  }, []);
  //console.log(singleMovie);
  //truncate  stackoverflow  string length to decrease and replace by ...
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${singleMovie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {singleMovie?.title || singleMovie?.name || singleMovie.orignal_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(singleMovie?.overview, 150)}
        </h1>
      </div>
      {/* to fade the bottom  */}
      <div className="banner__fadeBottom" />
    </div>
  );
}

export default Banner;
