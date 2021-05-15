import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import Genre from '../components/Genre';
import { fetchMovieDetail } from '../redux/actions';

const Detail = (props) => {
    const imdbID = props.match.params.imdbID || ''
    const {
        fetchMovieDetail,
        movieDetail
    } = props;

    useEffect(() => {
        fetchMovieDetail(imdbID)
    }, [fetchMovieDetail, imdbID]);

    useEffect(() => {
        console.log(movieDetail)
    }, [movieDetail])

    return (
        <Fragment>
            {
                movieDetail && <div className="container" style={{ padding: '32px 0 0 0' }}>
                    <a class="navbar-brand py-0" href="/">Back</a>
                    <div className="row text-left">
                        <div className="col-lg-4">
                            <div className="card">
                                <img
                                    alt={`The movie titled: ${movieDetail.Title}`}
                                    src={movieDetail.Poster}
                                />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h3 className="movieTitle">
                                {
                                    movieDetail.Title
                                }
                            </h3>
                            <li className="list-inline-item">
                                <button className="btn btn-warning movieYear">
                                    {
                                        movieDetail.Year
                                    }
                                </button>
                            </li>
                            <br /> <br />
                            <p className="movieOverview">
                                {
                                    movieDetail.Plot
                                }
                            </p>
                            <li className="list-inline-item">
                                {
                                    movieDetail.Genre.split(', ').map(genre => {
                                        return <Genre key={genre} genre={genre} />
                                    })
                                }
                            </li>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}

const mapStateToProps = ({ movieDetail }) => ({
    movieDetail
});
export default connect(
    mapStateToProps,
    {
        fetchMovieDetail
    }
)(Detail);
