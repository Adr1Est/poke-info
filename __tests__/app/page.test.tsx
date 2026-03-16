import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the page title", () => {
    render(<Home/>)

    expect(
      screen.getByRole("heading", { name: /poke info/i })
    ).toBeInTheDocument()
  })

  it("renders the NavBar component", () => {
    render(<Home/>)

    expect(screen.getByRole("navigation")).toBeInTheDocument()
  })
})