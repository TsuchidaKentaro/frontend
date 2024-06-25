import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import App from "./App";

// Mock fetch API response
const mockApiResponse = [
  { id: 1, name: "Apple", price: 100 },
  { id: 2, name: "Banana", price: 50 },
];

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: () => Promise.resolve(mockApiResponse),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders list of fruits from API", async () => {
  render(<App />);

  // Wait for fetch to complete and state to update
  await waitFor(() => {
    screen.getByText("Fruits Store"); // Check if title is rendered
    screen.getByText("Apple"); // Check if first fruit name is rendered
    screen.getByText("￥100"); // Check if first fruit price is rendered
    screen.getByText("Banana"); // Check if second fruit name is rendered
    screen.getByText("￥50"); // Check if second fruit price is rendered
  });

  // Additional assertions can be made based on the expected data
});
//test
//test