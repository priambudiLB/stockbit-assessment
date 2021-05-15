import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { create } from "react-test-renderer";
import configureStore from 'redux-mock-store';
import Movie from './Movie';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureStore([]);

describe("Movie component", () => {
  let store;
  let component;
  let props = {
    Title: 'judul',
    Poster: 'N/A'
  }
  const DefaultComponent = () => <Provider store={store}><MemoryRouter><Movie movie={props} /></MemoryRouter></Provider>

  beforeEach(() => {
    store = mockStore({
      setModal: () => { },
    });
    component = create(<DefaultComponent />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DefaultComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("shows the expected movie component", () => {
    component.root.findByProps({
      movie: props
    })
  });
});