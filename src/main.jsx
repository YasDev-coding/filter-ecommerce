import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ProductProvider } from "./Products/ProductContext.jsx";
import { FilterProvider } from "./Filter/FilterContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProductProvider>
  </StrictMode>,
);
