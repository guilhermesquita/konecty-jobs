import { render, screen } from "@testing-library/react";
import CardShoes from "@/components/cardShoes";

const mockProduct = {
  id: 1,
  brand: "Nike",
  description: "Nike Air Max",
  price: 299.99,
  image: "image1.jpg",
};

describe("CardShoes", () => {
  it("renders the card with product details", () => {
    render(<CardShoes {...mockProduct} />);
    
    expect(screen.getByText("Nike")).toBeInTheDocument();
    expect(screen.getByText("Nike Air Max")).toBeInTheDocument();
    expect(screen.getByText("R$299,99")).toBeInTheDocument();
  });

  it("renders the product image", () => {
    render(<CardShoes {...mockProduct} />);
    const image = screen.getByAltText("Nike Air Max");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "image1.jpg");
  });
});
