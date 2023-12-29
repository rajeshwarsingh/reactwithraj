import { render, screen, act, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_REST_MENU from "../mocks/mockRestMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appstore";
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_REST_MENU),
  })
);

it("Should Load restaurant menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </BrowserRouter>
      </Provider>
    )
  );

  const accordianHeader = screen.getByText(
    "Slow Churn Artisanal Ice Cream (Exciting New Flavors) (3)"
  );
  fireEvent.click(accordianHeader);
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(3);

  const addBtn = screen.getAllByRole("button", { name: "ADD+" });
  expect(screen.getByText("Cart - (0 items )")).toBeInTheDocument();
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart - (1 items )")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart - (2 items )")).toBeInTheDocument();

  expect((screen.getAllByTestId("foodItems")).length).toBe(5);

  fireEvent.click(screen.getByRole('button',{name:"Clear Cart"}));

  expect(screen.getByText("add item in the cart")).toBeInTheDocument();
});
