const Button = ({ title, handleClick, selectedButton, setSelectedButton }) => {
  return (
    <button
      onClick={() => {
        handleClick(title);
        setSelectedButton(title);
      }}
      className={`mb-2 mr-[0.4rem] text-nowrap rounded border-2 border-neutral-300 p-2 transition-all delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-md md:mr-2 ${
        selectedButton === title
          ? "bg-blue-500 text-white"
          : "bg-white text-black"
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
