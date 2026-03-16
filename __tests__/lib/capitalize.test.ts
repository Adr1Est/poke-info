import { capitalize } from "@/lib/capitalize";

describe("Capitalize Function", () => {
  it("capitalize the first char of a string", () => {
    expect(capitalize("charizard")).toBe("Charizard")
  })
  it("returns empty string if input is empty", () => {
    expect(capitalize("")).toBe("")
  })
  it("does not modify already capitalized strings", () => {
  expect(capitalize("Pikachu")).toBe("Pikachu");
});
})