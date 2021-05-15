import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import debounce from '../utilities/debounce';

const Search = (props) => {
  const {
    search,
    loadMovies,
    searchResult,
    searchErrorMessage
  } = props;
  const [value, setValue] = useState('')
  const handleSearch = (event) => {
    setValue(event.target.value)
    search(event.target.value)
  }
  const debouncedSearch = debounce(handleSearch, 500)
  const callSearchFunction = (e) => {
    e.preventDefault();
    loadMovies(value);
  }
  return (
    <div>
      <form className="search">
        <input
          onChange={(e) => { e.persist(); debouncedSearch(e) }}
          type="text"
          placeholder="Search..."
        />
        <input onClick={callSearchFunction} type="submit" value={"SEARCH"} />
        <div className="result">
          {!searchErrorMessage && searchResult.map((item, index) => {
            return <Link key={index} style={{ textDecoration: 'none', color: 'black' }} to={`/${item.imdbID}`}>
              <div className="result-item">{item.Title} ({item.Year})</div>
            </Link>
          })}
        </div>
      </form>
    </div>
  )
}

export default Search
