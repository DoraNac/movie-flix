import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPopularMovies();
    fetchActionMovies();
    fetchRomanceMovies();
    fetchComedyMovies();
  }, []);

  const apiKey = "bf0db22c84b4ae3804f515d7ecde8331";
  const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const actionMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28&language=en-US`;
  const romanceMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749&language=en-US`;
  const comedyMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35&language=en-US`;

  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(popularMoviesUrl);
      setPopularMovies(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchActionMovies = async () => {
    try {
      const response = await axios.get(actionMoviesUrl);
      setActionMovies(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRomanceMovies = async () => {
    try {
      const response = await axios.get(romanceMoviesUrl);
      setRomanceMovies(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchComedyMovies = async () => {
    try {
      const response = await axios.get(comedyMoviesUrl);
      setComedyMovies(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (searchText) => {
    setSearchTerm(searchText);
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchText}&page=1`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = (movie) => {
    navigate(`/moviedetails/${movie.id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="mainhomepage">
      <div className="search">
        <h1>MEOWFLIX</h1>
        <h2>Unlimited movies, TV shows, and more</h2>
        <input
          className="inputsearch"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="category">
        <h3>Popular Movies</h3>
        <div className="movieContainer">
          {(searchResults.length > 0 ? searchResults : popularMovies).map((movie) => (
            <div key={movie.id} className="movie" onClick={() => handleMovieClick(movie)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="category">
        <h3>Action Movies</h3>
        <div className="movieContainer">
          {actionMovies.map((movie) => (
            <div key={movie.id} className="movie" onClick={() => handleMovieClick(movie)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="category">
        <h3>Romance Movies</h3>
        <div className="movieContainer">
          {romanceMovies.map((movie) => (
            <div key={movie.id} className="movie" onClick={() => handleMovieClick(movie)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="category">
        <h3>Comedy Movies</h3>
        <div className="movieContainer">
          {comedyMovies.map((movie) => (
            <div key={movie.id} className="movie" onClick={() => handleMovieClick(movie)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
