import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  it("renders correctly", () => {
    const results = [];
    const { asFragment } = render(<SearchResults results={results} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct text", () => {
    const results = [];
    render(<SearchResults results={results} />);
    expect(screen.getByText("No results!")).toBeInTheDocument();
  });
});
