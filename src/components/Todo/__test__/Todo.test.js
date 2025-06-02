import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { MemoryRouter } from "react-router-dom/cjs/react-router-dom.min";
describe("test for the Todo", () => {
  it("should render ", () => {
    render(
      <MemoryRouter>
        <Todo />
      </MemoryRouter>
    );

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    const buttonElement = screen.getByRole("button", { name: "Add" });
    fireEvent.change(inputElement, { target: { value: "new thing  man " } });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText("new thing man");
    expect(divElement).toBeInTheDocument();
  });

  it("it should change when we click the button", () => {});
});
