import TodoFooter from "../TodoFooter";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
describe("test the amount of the tasks", () => {
  it("should render te correct amount of incomplete tasks", async () => {
    render(
      <MemoryRouter>
        <TodoFooter numberOfIncompleteTasks={5} />
      </MemoryRouter>
    );

    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should be one singular task not tasks ", () => {
    render(
      <MemoryRouter>
        <TodoFooter numberOfIncompleteTasks={1} />
      </MemoryRouter>
    );

    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
  it("it should be visible to user ", () => {
    render(
      <MemoryRouter>
        <TodoFooter numberOfIncompleteTasks={1} />
      </MemoryRouter>
    );

    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeVisible();
  });
});
