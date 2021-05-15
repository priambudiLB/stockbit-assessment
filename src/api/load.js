import Axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY;

export default function loadMovies(search, page, callback) {
    Axios.get(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}&page=${page}`)
        .then(callback.onSuccess);
};