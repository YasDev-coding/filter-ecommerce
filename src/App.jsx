import { useEffect, useState, useContext } from "react";

import Header from "./Header/Header";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Filter from "./Filter/Filter.jsx";
import { ProductContext } from "./Products/ProductContext.jsx";
import { useFilters } from "./Filter/FilterContext.jsx";

export default function App() {
  const {
    productsData,
    setProductsData,
    filterByCategory,
    filterByColor,
    filterByCompany,
    filterByPriceRange,
    filterBySearch,
  } = useContext(ProductContext);

  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 768);
  const [productSearch, setProductSearch] = useState("");
  const [filtered, setFiltered] = useState(productsData);
  const [selectedRecommended, setSelectedRecommended] =
    useState("All Products");

  const { selectedCategory, selectedPriceRange, selectedColor } = useFilters();

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  // Handle search input
  const handleSearch = (search) => {
    setProductSearch(search);
  };

  // Handle recommended filter
  const handleRecommended = (company) => {
    setSelectedRecommended(company);
  };

  // Apply all filters
  useEffect(() => {
    let filteredProducts = productsData;

    // Apply search filter
    filteredProducts = filterBySearch(productSearch, filteredProducts);

    // Apply company filter
    filteredProducts = filterByCompany(selectedRecommended, filteredProducts);

    // Apply category filter
    filteredProducts = filterByCategory(selectedCategory, filteredProducts);

    // Apply color filter
    filteredProducts = filterByColor(selectedColor, filteredProducts);

    // Apply price range filter
    filteredProducts = filterByPriceRange(selectedPriceRange, filteredProducts);

    // Update the filtered state
    setFiltered(filteredProducts);
  }, [
    productSearch,
    selectedRecommended,
    selectedCategory,
    selectedColor,
    selectedPriceRange,
    productsData,
  ]);

  return (
    <>
      <Header
        smallScreen={smallScreen}
        productSearch={productSearch}
        handleSearch={handleSearch}
      />

      <main className="flex">
        {!smallScreen && (
          <aside className="sticky top-0 h-screen max-w-40 space-y-5 text-nowrap bg-neutral-300 px-6 shadow-md">
            <Filter />
          </aside>
        )}

        <article className="space-y-8 py-4">
          <Recommended handleRecommended={handleRecommended} />

          <Products productsData={filtered} />
        </article>
      </main>
    </>
  );
}
