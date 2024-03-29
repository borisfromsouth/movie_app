import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from "react-router-dom";

function Movie({year, title, summary, genres, poster}){
    return <Link to="/movie-details">
        <div className='movie'>
            <img src={poster} alt={title} title={title}/>
            <div className="movie_column">
                <h3 className="movie_title">{title}</h3>
                <h4 className="movie_year">{year}</h4>
                <ul className="movie_genres">
                    {genres.map((genre, index) => { return <li key={index} className='genres_genre'>{genre}</li>})}  {/* index для уникального идентификатора (вместо key) */}
                </ul>
                <p className="movie_summary">{summary.slice(0, 200)}...</p>
            </div>
        </div>
    </Link>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;