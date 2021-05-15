import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { create } from "react-test-renderer";
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import Search from './Search';

describe("Search component", () => {
  let props = {
    search: () => {},
    loadMovies: () => {}, 
    searchResult: [], 
    searchErrorMessage: ''
  }
  const DefaultComponent = () => <MemoryRouter><Search {...props} /></MemoryRouter>
  const component = create(<DefaultComponent />);
  const instance = component.root.findByType(Search);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DefaultComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("shows the expected movie component", () => {
    expect(instance.props).toStrictEqual(props)
  });
});