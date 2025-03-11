import { useContext } from "react";
import Card from "../components/Card";
import { ProductContext } from "./ProductContext";

const Products = ({ productsData }) => {
  return (
    <section className="grid gap-8 px-8 md:grid-cols-2 lg:grid-cols-4">
      {productsData.map((product, index) => (
        <Card
          key={index}
          img={product.img}
          title={product.title}
          star={product.star}
          reviews={product.reviews}
          prevPrice={product.prevPrice}
          newPrice={product.newPrice}
        />
      ))}
    </section>
  );
};

export default Products;
