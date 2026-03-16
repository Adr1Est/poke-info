import { render, screen } from "@testing-library/react"
import RootLayout from "@/app/layout"

describe("RootLayout", () => {
  it("renders children inside Providers", () => {
    render(
      <RootLayout>
        <div>Test content</div>
      </RootLayout>
    );

    expect(screen.getByText("Test content")).toBeInTheDocument()
  })
})