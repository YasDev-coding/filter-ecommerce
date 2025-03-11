import { FaCartPlus } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { MdLogout } from "react-icons/md";
import { useEffect, useRef } from "react";
import Filter from "../Filter/Filter";

const SideMenu = ({ handleMenu, menuOpen }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      menuRef.current.classList.remove(
        "hidden",
        "motion-translate-x-out-[100%]",
        "motion-translate-y-out-[0%]",
        "motion-opacity-out-80",
      );

      menuRef.current.classList.add(
        "motion-translate-x-in-[100%]",
        "motion-translate-y-in-[0%]",
        "motion-opacity-in-80",
      );
    } else {
      menuRef.current.classList.remove(
        "motion-translate-x-in-[100%]",
        "motion-translate-y-in-[0%]",
        "motion-opacity-in-80",
      );

      menuRef.current.classList.add(
        "motion-translate-x-out-[100%]",
        "motion-translate-y-out-[0%]",
        "motion-opacity-out-80",
      );
    }
  }, [menuOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed left-0 top-0 z-50 hidden h-screen w-screen overflow-y-auto bg-neutral-300 px-6 py-[1.2rem]"
    >
      <div className="flex items-center justify-between text-2xl">
        <FaCartPlus />

        <ul className="flex flex-1 justify-evenly">
          <li>
            <a href="">
              <IoMdHeartEmpty className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
            </a>
          </li>
          <li>
            <a href="">
              <GiShoppingCart className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
            </a>
          </li>
          <li>
            <a href="">
              <GoPerson className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
            </a>
          </li>
        </ul>

        <button onClick={handleMenu}>
          <MdLogout />
        </button>
      </div>
      <div className="py-4">
        <Filter />
      </div>
    </div>
  );
};

export default SideMenu;
