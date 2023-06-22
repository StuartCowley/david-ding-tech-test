import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  it("renders correctly", () => {
    const { asFragment } = render();
    <SearchResults />;

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct text", () => {
    render(<SearchResults />);
    expect(screen.getByText("Search Results")).toBeInTheDocument();
  });
});
