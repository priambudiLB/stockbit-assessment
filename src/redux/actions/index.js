import { SET_MOVIE_LIST, API, FETCH_MOVIE_LIST, SET_SEARCH_LIST, FETCH_SEARCH_LIST, FETCH_MOVIE_DETAIL, SET_MOVIE_DETAIL, SET_MODAL } from "./types";

export function fetchMovieList(search, page, reset) {
  return apiAction({
    url: `https://www.omdbapi.com/?apikey=faf7e5bb&s=${search}&page=${page}`,
    onSuccess: (data) => {
      return setMovie(data, reset, search)
    },
    onFailure: () => console.log("Error occured loading movies"),
    label: FETCH_MOVIE_LIST
  });
}

export function fetchMovieSearch(search) {
  return apiAction({
    url: `https://www.omdbapi.com/?apikey=faf7e5bb&s=${search}&page=1`,
    onSuccess: (data) => {
      return setSearch(data)
    },
    onFailure: () => console.log("Error occured loading movies"),
    label: FETCH_SEARCH_LIST
  });
}

export function fetchMovieDetail(id) {
  return apiAction({
    url: `https://www.omdbapi.com/?apikey=faf7e5bb&i=${id}&plot=full`,
    onSuccess: (data) => {
      return setMovieDetail(data)
    },
    onFailure: () => console.log("Error occured loading movies"),
    label: FETCH_MOVIE_DETAIL
  });
}

export function setModal(data) {
  return {
    type: SET_MODAL,
    data
  };
}

function setMovie(data, reset, search) {
  return {
    type: SET_MOVIE_LIST,
    payload: data,
    reset,
    search
  };
}

function setSearch(data) {
  return {
    type: SET_SEARCH_LIST,
    payload: data
  };
}

function setMovieDetail(data) {
  return {
    type: SET_MOVIE_DETAIL,
    payload: data
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}
