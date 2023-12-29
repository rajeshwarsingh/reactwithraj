import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import AppStore from "../../utils/appstore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load header component with login button", () => {
  render(
    <Provider store={AppStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginButton = screen.getByRole('button', {name:"Login"});

  expect(loginButton).toBeInTheDocument();
});

it("Should load header component with cart item zero", () => {
  render(
    <Provider store={AppStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  
  const cartItems = screen.getByText('Cart - (0 items )');

  expect(cartItems).toBeInTheDocument();
});

it("Should load header component with cart item", () => {
  render(
    <Provider store={AppStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout", () => {
  render(
    <Provider store={AppStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginButton = screen.getByRole('button', {name:"Login"});

  // SIMULATE CLICK EVENT
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole('button', {name:"Logout"});

  expect(logoutButton).toBeInTheDocument();
});
