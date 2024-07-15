import HomePage from "@/app/home";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// Mock da API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, brand: "Nike", description: "Nike Air Max", price: 299.99, image: "image1.jpg" },
      { id: 2, brand: "Adidas", description: "Adidas Ultraboost", price: 349.99, image: "image2.jpg" },
    ]),
  })
) as jest.Mock;

describe("HomePage", () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it("renders the search input", () => {
    const searchInput = screen.getByPlaceholderText("Buscar Produto");
    expect(searchInput).toBeInTheDocument();
  });

  it("fetches and displays products", async () => {
    await waitFor(() => {
      const productCount = screen.getByText(/produtos encontrados/i);
      expect(productCount).toHaveTextContent("2 produtos encontrados");
    });

    const products = screen.getAllByText(/Nike Air Max|Adidas Ultraboost/i);
    expect(products.length).toBe(2);
  });

  it("filters products by brand", async () => {
    await waitFor(() => {
      const nikeButton = screen.getByText("Nike");
      fireEvent.click(nikeButton);
    });

    const products = screen.getAllByText(/Nike Air Max/i);
    expect(products.length).toBe(1);
  });

  it("filters products by search term", async () => {
    const searchInput = screen.getByPlaceholderText("Buscar Produto");
    fireEvent.change(searchInput, { target: { value: "Air Max" } });

    const products = screen.getAllByText(/Nike Air Max/i);
    expect(products.length).toBe(1);
  });
});
