import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/movies/all").then(res => setMovies(res.data));
  }, []);

  return (
    <>
      <Header />

      <div className="container">
        <h1>Now Showing 🎥</h1>

        {movies.map(movie => (
          <div className="card" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <button onClick={() => navigate(`/movie/${movie.id}`)}>
              View
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Movies;