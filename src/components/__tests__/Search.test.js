import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import mockRestList from "../mocks/mockRestList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// INTEGRATION TESTING

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockRestList);
    },
  });
});

it("Should Search restaurant list for na test input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cartBeforeSearch = screen.getAllByTestId("resCard");

  expect(cartBeforeSearch.length).toBe(25);

  const searchBtn = screen.getByRole("button", { name: "search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "na" } });

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(5);

  expect(searchBtn).toBeInTheDocument();
});

it("should filter top restaurent", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cartBeforeSearch = screen.getAllByTestId("resCard");

  expect(cartBeforeSearch.length).toBe(25);

  const filterBtn = screen.getByRole('button',{name:"Top Rated Restaurant"});

  fireEvent.click(filterBtn);

  const cards = screen.getAllByTestId("resCard");


  expect(cards.length).toBe(4);
});