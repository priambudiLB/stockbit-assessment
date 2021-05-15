import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setModal } from '../redux/actions';

const DEFAULT_PLACEHOLDER_IMAGE = "https://www.reelviews.net/resources/img/default_poster.jpg";

const Movie = (props) => {
  const {
    movie,
    setModal
  } = props;
  const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <p><Link style={{ textDecoration: 'none', color: 'black' }} to={`/${movie.imdbID}`}>{movie.Title}</Link></p>
      <div>
        <img
          onClick={() => {
            setModal(poster)
          }}
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
    </div>
  )
}

export default connect(
  null,
  {
    setModal
  })(Movie);
