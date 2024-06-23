import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [randomSeries, setRandomSeries] = useState([]);
  const apiKey = "bf0db22c84b4ae3804f515d7ecde8331";
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
  const randomSeriesUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(movieDetailsUrl);
        setMovie(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRandomSeries = async () => {
      try {
        const response = await axios.get(randomSeriesUrl);
        setRandomSeries(response.data.results.slice(0, 5)); // Adjust as needed
      } catch (error) {
        console.error("Error fetching random series:", error);
      }
    };

    fetchMovieDetails();
    fetchRandomSeries();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!movie) {
    return <p>No movie details found</p>;
  }

  return (
    <div className="movie-details">
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p className="release-year">
          <strong>Release Year:</strong>{" "}
          {new Date(movie.release_date).getFullYear()}
        </p>
        <p className="overview">{movie.overview}</p>
        <button className="watch-button">Watch Now</button>
      </div>
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="random-series">
        <h2>Series You May Like</h2>
        <div className="series-container">
          {randomSeries.map((series) => (
            <div key={series.id} className="series">
              <img
                src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                alt={series.name}
              />
              <p>{series.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
