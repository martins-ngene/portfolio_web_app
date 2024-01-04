import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Hero from "../src/components/sections/home";

describe("Hero", () => {
  it("contains testId", () => {
    render(<Hero />);
    const welcome_text = screen.getByTestId("software-deveoper");
    expect(welcome_text).toBeInTheDocument();
  });
});
