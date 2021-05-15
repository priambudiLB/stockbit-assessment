import Axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY;

export default function search(search, callback) {
    Axios.get(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}&page=1`)
        .then(callback.onSuccess);
};