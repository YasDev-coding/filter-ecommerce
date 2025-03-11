import { createContext, useState, useContext } from "react";

// Create the FiltersContext
const FilterContext = createContext();

// Create a custom hook to use the FiltersContext
export const useFilters = () => {
  return useContext(FilterContext);
};

// Create the FiltersProvider component
export const FilterProvider = ({ children }) => {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState("all-categories");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all-prices");
  const [selectedColor, setSelectedColor] = useState("all-colors");

  // Value to be provided by the context
  const value = {
    selectedCategory,
    setSelectedCategory,
    selectedPriceRange,
    setSelectedPriceRange,
    selectedColor,
    setSelectedColor,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
