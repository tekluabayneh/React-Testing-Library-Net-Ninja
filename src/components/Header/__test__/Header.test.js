const { render, screen } = require("@testing-library/react");
import Header from "../Header";

describe("make shure the hader is rending corrctly ", () => {
  it("should render same test passed into title prop", () => {
    render(<Header title={"my Header"} />);

    const headingElement = screen.getByText(/my Header/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("should get the role of the Element", () => {
    render(<Header title={"my Header"} />);

    const headingElement = screen.getByRole("heading", { name: "my Header" });
    expect(headingElement).toBeInTheDocument();
  });

  it("should get the role of the Element", () => {
    render(<Header />);
    const headingElement = screen.getByRole("heading", { name: "Hello" });
    expect(headingElement).toBeInTheDocument();
  });

  it("should get the role of the Element", () => {
    render(<Header />);
    const headingElement = screen.getByTestId("header-2");
    expect(headingElement).toBeInTheDocument();
  });
});

/// this all will be the findBy

describe("this are the findBy method of testing", () => {
  it("it should get thing by method called findBy", async () => {
    render(<Header title={"findBy one"} />);

    const headingElement = await screen.findByText(/findBy one/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// the query by one

describe("this is the query by one ", async () => {
  it("it should get thing by method called findBy", () => {
    render(<Header title={"findBy one"} />);

    const headingElement = screen.queryByText(/findBy one/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// this is the get all by role method

describe("this is the query by one ", async () => {
  it("it should get thing by method called findBy", () => {
    render(<Header title={"findBy one"} />);

    const headingElement = screen.getAllByRole("heading");
    expect(headingElement.length).toBe(2);
  });
});
