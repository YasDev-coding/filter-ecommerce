import { IoMdHeartEmpty } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
const Nav = () => {
  return (
    <nav className="md:mr-6">
      <ul className="flex gap-8 text-2xl">
        <li>
          <a
            href="#"
            className="block transition-transform delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125"
          >
            <IoMdHeartEmpty className="" />
          </a>
        </li>
        <li>
          <a href="">
            <GiShoppingCart className="block transition-transform delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125" />
          </a>
        </li>
        <li>
          <a href="">
            <GoPerson className="block transition-transform delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
