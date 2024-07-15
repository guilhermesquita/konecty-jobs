"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Spinner from "@/components/spinner";
import { Filters } from "../../filters";
import CardShoes, { ProductCardProps } from "@/components/cardShoes";

export default function HomePage() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductCardProps[]>(
    []
  );
  const [brandFilter, setBrandFilter] = useState<string>("Todos");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [brandFilter, searchTerm, products]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const filterProducts = () => {
    let filtered = products;

    if (brandFilter !== "Todos") {
      filtered = filtered.filter((product) => product.brand === brandFilter);
    }

    if (searchTerm !== "") {
      filtered = filtered.filter((product) =>
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleChangeBrand = (brand: string) => {
    setBrandFilter(brand);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const callbackLoad = () => {
    return <Spinner />;
  };

  return (
    <main className="w-full flex flex-col md:px-40 px-5 pt-10 gap-7">
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

      <section>
        <h2 className="font-extrabold text-3xl font-montserrat">Tênis</h2>
        <p className="font-inter">
          {filteredProducts.length} produtos encontrados
        </p>
      </section>

      <BrandFilters
        filters={Filters}
        activeFilter={brandFilter}
        onChangeBrand={handleChangeBrand}
      />

      <section className="w-full flex flex-wrap justify-start md:gap-x-12 md:gap-y-5 gap-5 pt-10">
        {products.length > 0 ? (
          filteredProducts.map((product: ProductCardProps) => (
            <CardShoes key={product.id} {...product} />
          ))
        ) : (
          <div className="w-full flex justify-center">{callbackLoad()}</div>
        )}
      </section>
    </main>
  );
}

interface SearchBarProps {
  searchTerm: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => (
  <section className="w-full">
    <div className="w-56 h-10 flex border-2 bg-white border-white items-center gap-2 pl-5 duration-500 hover:border-black rounded-md">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={{ color: "#B9AFB5", fontWeight: "normal" }}
      />
      <input
        type="text"
        placeholder="Buscar Produto"
        className="w-full h-full rounded-md outline-0 font-inter placeholder:font-inter"
        value={searchTerm}
        onChange={onSearch}
      />
    </div>
  </section>
);

interface BrandFiltersProps {
  filters: string[];
  activeFilter: string;
  onChangeBrand: (brand: string) => void;
}

const BrandFilters: React.FC<BrandFiltersProps> = ({
  filters,
  activeFilter,
  onChangeBrand,
}) => (
  <section className="flex gap-3 flex-wrap">
    {filters.map((brand, ind) => (
      <button
        key={ind}
        className={`duration-300 rounded-lg px-5 font-inter font-medium ${
          activeFilter === brand && activeFilter !== "Todos"
            ? "bg-blueButton text-white"
            : "bg-white hover:bg-blueButton hover:text-white"
        }`}
        onClick={() => onChangeBrand(brand)}
      >
        {brand}
      </button>
    ))}
  </section>
);
