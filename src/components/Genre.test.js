import React from 'react';
import ReactDOM from 'react-dom';
import Genre from './Genre';
import { create } from "react-test-renderer";

describe("Genre component", () => {
  const GenreTest = () => <Genre genre={'action'} />;
  const component = create(<GenreTest />);
  const instance = component.root.findByType(Genre);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenreTest />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("shows the expected genre", () => {
    expect(instance.props.genre).toBe("action");
  });
});