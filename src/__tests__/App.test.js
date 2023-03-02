import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../components/App";

test("renders surreal estate logo with correct alt text", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const logoAltText = screen.getByAltText(/Site logo/);

  expect(logoAltText).toBeInTheDocument();
});