import clsx from "clsx";
import { useFilters } from "./FilterContext";
const categories = ["all-categories", "sneakers", "flats", "sandals", "heels"];
const pricesRange = ["all-prices", "$50 - $100", "$100 - $150", "Over $150"];
const colors = [
  {
    name: "all-colors",
    style:
      "bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 peer-checked:outline-blue-500",
  },
  { name: "Black", style: "bg-black peer-checked:outline-blue-500" },
  { name: "Blue", style: "bg-blue-500 peer-checked:outline-gray-600" },
  { name: "Red", style: "bg-red-500 peer-checked:outline-blue-500" },
  { name: "Green", style: "bg-green-500 peer-checked:outline-blue-500" },
  { name: "White", style: "bg-white peer-checked:outline-blue-500" },
];

const Filter = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedPriceRange,
    setSelectedPriceRange,
    selectedColor,
    setSelectedColor,
  } = useFilters();

  return (
    <>
      <div className="space-y-2 py-4 md:py-1">
        <h2 className="font-semibold">Category</h2>

        <form action="" className="flex flex-col space-y-2">
          {categories.map((category, index) => (
            <label key={index} htmlFor={category} className="cursor-pointer">
              <input
                className="mr-3 h-4 w-4 cursor-pointer accent-blue-500 checked:motion-scale-in"
                type="radio"
                name="product"
                id={category}
                value={category}
                checked={selectedCategory === category} // Bind state to this input
                onChange={(event) => {
                  setSelectedCategory(event.target.value);
                }} // Handle changes
              />
              {category == "all-categories" ? "All" : category}
            </label>
          ))}
        </form>
      </div>
      <hr className="border-black" />
      <div className="space-y-2 py-4 lg:py-1">
        <h2 className="font-semibold">Price</h2>
        <form action="" className="flex flex-col space-y-2">
          {pricesRange.map((range, index) => (
            <label key={index} htmlFor={range} className="cursor-pointer">
              <input
                className="mr-3 h-4 w-4 cursor-pointer accent-blue-500 checked:motion-scale-in"
                type="radio"
                name="product"
                id={range}
                value={range}
                checked={selectedPriceRange === range} // Bind state to this input
                onChange={(event) => {
                  setSelectedPriceRange(event.target.value);
                }} // Handle changes
              />
              {range == "all-prices" ? "All" : range}
            </label>
          ))}
        </form>
      </div>
      <hr className="border-black" />
      <div className="space-y-2 py-4 lg:py-1">
        <h2 className="font-semibold">Colors</h2>
        <form action="" className="flex flex-col space-y-2">
          {colors.map((color, index) => (
            <label
              key={index}
              htmlFor={color.name}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                className="peer hidden"
                type="radio"
                name="color"
                id={color.name}
                value={color.name}
                checked={selectedColor === color.name} // Bind state to this input
                onChange={(event) => {
                  setSelectedColor(event.target.value);
                }} // Handle changes
              />
              <div
                className={clsx(
                  "h-4 w-4 rounded-full outline-offset-0 peer-checked:outline peer-checked:outline-[3px] peer-checked:motion-scale-in",
                  color.style,
                )}
              />
              {color.name == "all-colors" ? "All" : color.name}
            </label>
          ))}
        </form>
      </div>
    </>
  );
};

export default Filter;
