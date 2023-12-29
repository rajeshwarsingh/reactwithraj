import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  test("Should load contact us page", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("button");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact us page", () => {
    render(<ContactUs />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact us page", () => {
    render(<ContactUs />);
    const button = screen.getByPlaceholderText("Name");
    expect(button).toBeInTheDocument();
  });

  test("Should load 2 input name inside contact us page", () => {
    render(<ContactUs />);
    // querying
    const inputsBoxes = screen.getAllByRole("textbox");
    expect(inputsBoxes.length).toBe(2);
    console.log(inputsBoxes);
  });
});
