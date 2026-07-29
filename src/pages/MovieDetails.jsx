import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/movies/${id}`).then(res => setMovie(res.data));
  }, []);

  return (
    <>
      <Header />

      <div className="container">
        <div className="card">
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>⭐ {movie.rating}</p>
          <button onClick={() => navigate(`/book/${id}`)}>
            Book Ticket
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;