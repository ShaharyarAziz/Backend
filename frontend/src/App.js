import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("There was an error making the request:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Test Project</h1>
        <p>MOVIES: {movies.length}</p>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <h1>{movie.length}</h1>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
