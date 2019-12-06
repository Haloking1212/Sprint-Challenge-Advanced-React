import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from './App';
import Nav from "./components/Nav";

test('renders without crashing', () => {
 const component = render(<App/>)
});

test("nav renders", () => {
  const nav = render(<Nav />)
})

test("player div card renders", () => {
  const player = render(<div className="card"></div>)
})
