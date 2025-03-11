import { FaCartPlus } from "react-icons/fa";

import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import Nav from "./Nav";

const Header = ({ smallScreen, titleSearch, handleSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center gap-2 bg-neutral-300 shadow-md md:static md:z-0 md:gap-20">
      <a href="#">
        <FaCartPlus className="ml-6 text-2xl md:ml-10" />
      </a>
      <div className="flex flex-1 items-center justify-between p-4">
        <input
          className="flex-1 rounded px-2 py-1 shadow outline-none outline-offset-0 focus-within:outline-black md:max-w-md"
          type="text"
          placeholder="🔍 Search Items..."
          value={titleSearch}
          onChange={(event) => handleSearch(event.target.value)}
        />
        {smallScreen ? (
          <button onClick={handleMenu} className="ml-6 text-2xl">
            <RxHamburgerMenu />
          </button>
        ) : (
          <Nav />
        )}
      </div>
      {smallScreen && <SideMenu handleMenu={handleMenu} menuOpen={menuOpen} />}
    </header>
  );
};

export default Header;
