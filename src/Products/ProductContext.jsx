import { createContext, useState } from "react";
import data from "../db/data";

// Create a context for productsData
export const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
  // Sample product data (you can replace this with data fetched from an API or JSON file)
  const [productsData, setProductsData] = useState(data);

  const parsePriceRange = (priceRange) => {
    // Remove the dollar signs and split the string into min and max
    const [min, max] = priceRange
      .replace(/\$/g, "") // Remove all "$" signs
      .split("-") // Split the string by "-"
      .map((value) => parseFloat(value.trim())); // Convert each part to a number

    return { min, max };
  };

  const parsePrice = (price) => {
    // Remove all non-numeric characters (except "." for decimals)
    const numericValue = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    return numericValue;
  };

  // Function to filter productsData by category
  const filterByCategory = (category, filteredData) => {
    if (category === "all-categories") return filteredData;
    else
      return filteredData.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase(),
      );
  };

  // Function to filter productsData by color
  const filterByColor = (color, filteredData) => {
    if (color == "all-colors") return filteredData;

    return filteredData.filter(
      (product) => product.color.toLowerCase() === color.toLowerCase(),
    );
  };

  // Function to filter productsData by Company
  const filterByCompany = (company, filteredData) => {
    if (company === "All Products") return filteredData;

    return filteredData.filter(
      (product) => product.company.toLowerCase() === company.toLowerCase(),
    );
  };

  // Function to filter productsData by price
  const filterByPriceRange = (priceRange, filteredData) => {
    if (priceRange === "all-prices") return filteredData;
    else if (priceRange === "Over $150") {
      const min = parsePrice(priceRange);
      return filteredData.filter((product) => {
        const price = parsePrice(product.newPrice);
        return price >= min;
      });
    } else {
      const { min, max } = parsePriceRange(priceRange);
      return filteredData.filter((product) => {
        const price = parsePrice(product.newPrice);
        return price >= min && price <= max;
      });
    }
  };
  // Function to filter productsData by search
  const filterBySearch = (search, filteredData) => {
    if (!search) return filteredData;

    return filteredData.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    );
  };

  // Value to be provided to the context
  const value = {
    productsData,
    filterByCategory,
    filterByColor,
    filterByCompany,
    filterByPriceRange,
    filterBySearch,
    setProductsData,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
