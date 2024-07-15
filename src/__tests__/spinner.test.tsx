import { render, screen } from "@testing-library/react";
import Spinner from "@/components/spinner";

describe("Spinner", () => {
  it("renders the spinner", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
  });
});
