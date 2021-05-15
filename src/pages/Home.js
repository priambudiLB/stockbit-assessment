import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import InfiniteScroll from '../components/InfiniteScroll';
import Movie from '../components/Movie';
import { fetchMovieList, fetchMovieSearch } from '../redux/actions';

const Home = (props) => {
    const {
        fetchMovieList,
        movies,
        errorMessage,
        searchValue
    } = props;
    const [firstLoad, setFirstLoad] = useState(true)
    let name = new URLSearchParams(window.location.search.substring(1)).get('q');
    useEffect(() => {
            fetchMovieList(name || searchValue, 1, true)
    }, [fetchMovieList, name, searchValue]);

    useEffect(() => {
        if (movies && firstLoad) {
            setFirstLoad(false)
        }
    }, [firstLoad, movies])

    return (
        <Fragment>
            <p className="App-intro">
                Showing results for: {searchValue}
            </p>
            <div className="movies">
                {firstLoad && !errorMessage ? (
                    <span className="loader"></span>
                ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                ) : (
                    <InfiniteScroll
                        loadMore={(nextPage) => {
                            fetchMovieList(name || searchValue, nextPage, false)
                        }}
                    >
                        {
                            movies.map((movie, index) => (
                                <Movie key={`${index}-${movie.Title}`} movie={movie} />
                            ))
                        }
                    </InfiniteScroll>
                )}
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ movies, loading, errorMessage, searchValue }) => ({
    movies,
    loading,
    errorMessage,
    searchValue
});
export default connect(
    mapStateToProps,
    {
        fetchMovieList,
        fetchMovieSearch
    }
)(Home);
