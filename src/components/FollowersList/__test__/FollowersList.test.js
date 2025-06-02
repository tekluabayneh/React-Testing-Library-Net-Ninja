import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
jest.mock("axios");

describe("follower list", () => {
  it("should render follower items", async () => {
    const mockedResponse = {
      data: {
        results: [
          {
            login: { uuid: "1", username: "john_doe" },
            name: { first: "John", last: "Doe" },
            picture: { large: "some-url" },
          },
        ],
      },
    };

    axios.get.mockResolvedValueOnce(mockedResponse);

    render(
      <MemoryRouter>
        <FollowersList />
      </MemoryRouter>
    );

    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should  render multiple followers items", async () => {
    const mockedResponse = {
      data: {
        results: [
          {
            login: { uuid: "1", username: "john_doe" },
            name: { first: "John", last: "Doe" },
            picture: { large: "some-url" },
          },
          {
            login: { uuid: "1", username: "john_doe" },
            name: { first: "John", last: "Doe" },
            picture: { large: "some-url" },
          },
          {
            login: { uuid: "1", username: "john_doe" },
            name: { first: "John", last: "Doe" },
            picture: { large: "some-url" },
          },
        ],
      },
    };

    axios.get.mockResolvedValueOnce(mockedResponse);

    render(
      <MemoryRouter>
        <FollowersList />
      </MemoryRouter>
    );

    for (let i = 0; i < 3; i++) {
      const item = await screen.findByTestId(`follower-item-${i}`);
      expect(item).toBeInTheDocument();
    }

    const followerDivElement = await screen.findAllByTestId(/follower-item/i);

    expect(followerDivElement.length).toBe(3);
  });
});
