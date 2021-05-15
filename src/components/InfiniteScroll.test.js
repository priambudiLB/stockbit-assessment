import React from 'react';
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer";
import InfiniteScroll from './InfiniteScroll';

describe("InfiniteScroll component", () => {
  let observe;
  let unobserve;

  beforeEach(() => {
    observe = jest.fn();
    unobserve = jest.fn();

    window.IntersectionObserver = jest.fn(() => ({
      observe,
      unobserve,
    }));
  });
  const InfiniteScrollTest = () => <InfiniteScroll />;
  const component = create(<InfiniteScrollTest />);
  const instance = component.root.findByType(InfiniteScroll);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InfiniteScrollTest />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});