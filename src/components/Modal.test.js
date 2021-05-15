import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { create } from "react-test-renderer";
import Modal from './Modal';
import configureStore from 'redux-mock-store';
 
const mockStore = configureStore([]);

describe("Modal component", () => {
  let store;
  let component;
  const DefaultComponent = () => <Provider store={store}><Modal /></Provider>
 
  beforeEach(() => {
    store = mockStore({
      modalImage: 'abc.jpg',
    });
    component = create(<DefaultComponent />);
  });
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DefaultComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("shows the expected modal", () => {
    component.root.findByProps({modalImage: "abc.jpg"})
  });
});