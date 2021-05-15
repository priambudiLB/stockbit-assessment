import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from "react-redux";
import "./App.css";
import Search from "./components/Search";
import { fetchMovieSearch } from './redux/actions';
import routes from "./routes";
import Modal from "./components/Modal";

const App = (props) => {
  const {
    fetchMovieSearch,
    searchResult,
    searchErrorMessage
  } = props;

  return (
    <BrowserRouter>
      <div className="App">
        <div className="Nav">
          <Search
            searchResult={searchResult}
            searchErrorMessage={searchErrorMessage}
            search={(val) => {
              fetchMovieSearch(val)
            }}
            loadMovies={(val) => {
              const qs = new URLSearchParams({ q: val }).toString()
              window.location.href = `/?${qs}`
            }}
          />
        </div>
        <Suspense fallback={'.'}>
          <Switch>
            {routes.map(route => {
              return <Route key={route.path} {...route} />
            })}
          </Switch>
        </Suspense>
        <Modal />
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = ({
  searchResult,
  searchErrorMessage 
}) => ({
  searchResult,
  searchErrorMessage
});
export default connect(
  mapStateToProps,
  {
    fetchMovieSearch
  }
)(App);
