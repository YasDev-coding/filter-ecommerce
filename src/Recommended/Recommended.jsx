import { useState } from "react";
import Button from "../components/Button";

const Recommended = ({ handleRecommended }) => {
  const [selectedButton, setSelectedButton] = useState("All Products");

  return (
    <section className="px-8 py-4">
      <h2 className="mb-4 text-2xl font-bold">Recommended For You</h2>
      <Button
        title={"All Products"}
        handleClick={handleRecommended}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <Button
        title={"Nike"}
        handleClick={handleRecommended}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <Button
        title={"Adidas"}
        handleClick={handleRecommended}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <Button
        title={"Puma"}
        handleClick={handleRecommended}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <Button
        title={"Vans"}
        handleClick={handleRecommended}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
    </section>
  );
};

export default Recommended;
