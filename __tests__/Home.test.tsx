import { describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("HomePage", () => {
  it("should heading 1 be defined", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Home" })
    ).toBeDefined();
  });
});
