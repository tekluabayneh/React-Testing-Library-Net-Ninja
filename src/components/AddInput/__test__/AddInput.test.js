import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";
let mockedFn = jest.fn();
describe("testing input element", () => {
  it("should render input element", async () => {
    render(<AddInput todos={[]} setTodos={mockedFn} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in input", () => {
    render(<AddInput todos={[]} setTodos={mockedFn} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {
      target: { value: "Bo Grocery Shopping" },
    });
    expect(inputElement.value).toBe("Bo Grocery Shopping");
  });

  it("should have empty input when add button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockedFn} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: "Add" });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
