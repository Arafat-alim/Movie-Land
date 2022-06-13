import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import searchIcon from "./searchIcon.svg";
import MovieCard from "./MovieCard";

const App = () => {
  //!creating state
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //! API LINK
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=6bc9702a";

  //! Function to fetch data from api
  let searchMovies = async (title) => {
    let response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data.Search);
    setMovies(data.Search);
  };

  //movide Object
  // const movie1 = {
  //   Title: "Italian Spiderman",
  //   Year: "2007",
  //   imdbID: "tt2705436",
  //   Type: "movie",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
  // };

  //! using useEffect for api calling - component did mount
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for  movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
