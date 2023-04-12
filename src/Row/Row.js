import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovie] = useState([]);
  const [trailer, setTrailer] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
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

  function handleClick(movie) {
    if (trailer) {
      setTrailer("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.orignal_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
          //v=videoid
        })
        .catch((error) => console.log(error));
    }
  }
  //console.log(movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies?.map((el) => (
          <img
            key={el.id}
            onClick={() => handleClick(el)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${isLargeRow ? el.poster_path : el.backdrop_path}`}
            alt={el.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailer && <YouTube videoId={trailer} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
// *********************************
// you could parse out the name and age parameters using:url.searchparams
