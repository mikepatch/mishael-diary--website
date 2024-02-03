import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("HomePage", () => {
    it("should render HomePage", () => {
        render(<Home />);
        expect(
            screen.getByRole("heading", { level: 1, name: "Mishael Diary" })
        ).toBeDefined();
    });
});
