import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCartMock.json";
import "@testing-library/jest-dom";

it("should render restaurant cart with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Behrouz Biryani");

  expect(name).toBeInTheDocument();
});

it("should render restaurant cart with promoted label",()=>{
  // Try this -  test HOC- withPromotedLabel()
})