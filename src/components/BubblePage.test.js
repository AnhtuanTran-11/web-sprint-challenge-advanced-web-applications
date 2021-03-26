import React from "react";
import { render, screen } from "@testing-library/react";
import axiosMock from 'axios';
import BubblePage from "./BubblePage";

import mockBubblePage from "./BubblePage";
jest.mock("./BubblePage")

const testColor = {
  color: "test",
  code: { hex: "test" },
};

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  mockBubblePage.mockResolvedValueOnce(testColor)
  render(<BubblePage />);

  const bubbles = await screen.findAllByTestId('color')
  expect(bubbles).toBeInTheDocument();
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
