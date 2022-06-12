import React from "react";
import { useEffect } from "react";

const App = () => {
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=6bc9702a";
  let searchMovies = async (title) => {
    let response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  //using useEffect for api calling - component did mount
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div>
      <h1>Hello React</h1>
      <p>Happy Coding</p>
    </div>
  );
};
export default App;
