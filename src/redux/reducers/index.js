import {
  SET_MOVIE_LIST,
  API_START,
  API_END,
  FETCH_MOVIE_LIST,
  SET_SEARCH_LIST,
  FETCH_SEARCH_LIST,
  FETCH_MOVIE_DETAIL,
  SET_MOVIE_DETAIL,
  SET_MODAL
} from "../actions/types";

export default function (state = {
  loading: false,
  movies: [],
  movieDetail: null,
  searchResult: [],
  searchValue: 'batman',
  errorMessage: '',
  searchErrorMessage: '',
  modalImage: '',
}, action) {
  switch (action.type) {
    case SET_MOVIE_LIST:
      if (action.payload.Error) {
        if (action.payload.Error !== "Movie not found!") {
          return {
            ...state,
            searchValue: action.search,
            errorMessage: action.payload.Error
          };
        } else {
          return state
        }
      } else {
        return action.reset ? {
          ...state,
          searchResult: [],
          errorMessage: '',
          searchValue: action.search,
          movies: action.payload.Search
        } : {
          ...state,
          errorMessage: '',
          searchValue: action.search,
          movies: [...state.movies, ...action.payload.Search]
        };
      }
    case SET_MOVIE_DETAIL:
      if (action.payload.Error) {
        return {
          ...state,
          errorMessage: action.payload.Error
        };
      } else {
        return {
          ...state,
          searchResult: [],
          searchValue: '',
          movieDetail: action.payload
        };
      }
    case SET_SEARCH_LIST:
      if (action.payload.Error) {
        return {
          ...state,
          searchErrorMessage: action.payload.Error
        };
      } else {
        let searchResult = action.payload.Search || []
        return {
          ...state,
          searchErrorMessage: '',
          searchResult
        };
      }
    case SET_MODAL:
      return {
        ...state,
        modalImage: action.data,
      };
    case API_START:
      if ([FETCH_MOVIE_LIST, FETCH_SEARCH_LIST, FETCH_MOVIE_DETAIL].includes(action.payload)) {
        return {
          ...state,
          loading: true
        };
      }
      break;
    case API_END:
      if ([FETCH_MOVIE_LIST, FETCH_SEARCH_LIST, FETCH_MOVIE_DETAIL].includes(action.payload)) {
        return {
          ...state,
          loading: false
        };
      }
      break;
    default:
      return state;
  }
}
