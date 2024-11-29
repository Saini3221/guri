import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, setUser } = useContext(UserContext);
  function logOut() {
    setUser(false);
    localStorage.removeItem("usertoken")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="m-2 rounded-md flex p-3 flex-col md:flex-row items-center justify-between h-auto md:h-15 bg-gray-800 mb-1 md:text-base md:p-2 border-2 border-white">
      <div className="flex justify-between items-center w-full md:w-auto mb-2 md:mb-0">
        <Link to="/" className="flex gap-2 items-center justify-center max-xl:gap-1">
          <img
            src="https://e7.pngegg.com/pngimages/1011/946/png-clipart-minecraft-gray-fullbuster-fairy-tail-skin-video-games-gray-fullbuster-grey-cobalt.png"
            alt="Logo"
            className="rounded-full  h-9 max-md:ml-0"
          />
          <p className="font-bold text-lg text-white  max-md:block max-[360px]:hidden">
            Guri Mobile Garage
          </p>
        </Link>
        {/* Only show the menu button on small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white font-bold text-lg"
          >
            ☰
          </button>
        </div>
      </div>
      <div className="flex w-[60%] justify-between max-md:flex-col  max-md:justify-center">
        {/* This menu will always be shown on medium (md) screens and above */}
        <div
          className={`flex-col md:flex md:flex-row justify-between w-full md:w-auto mb-2 md:mb-0 ${
            isMenuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-5 max-md:gap-2">
            <Link to="/dashboard" className="text-gray-400 hover:text-white">
              Dashboard
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link to="/mobile" className="text-gray-400 hover:text-white">
              Shop
            </Link>
            <Link to="/sale" className="text-gray-400 hover:text-white">
              Sale
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-white">
              About
            </Link>
          </ul>
        </div>

        {/* Icons always show in a row on md screens and above */}
        <div
          className={`flex-col md:flex md:flex-row justify-between gap-2 md:gap-2 ${
            isMenuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          {!user ? (
            <Link to="/login" className="flex text-gray-400 hover:text-white">
              <FaUserCircle className="text-[2rem] mx-5 max-md:hidden" />
              <div>Log In</div>
            </Link>
          ) : (
            <button
              onClick={logOut}
              className="flex text-gray-400 hover:text-white"
            >
              <FaUserCircle className="text-[2rem] mx-5 max-md:hidden" />
              <div>Logout</div>
            </button>
          )}

          <Link to="/cart" className="flex text-gray-400 hover:text-white">
            <IoCartSharp className="text-[2rem] mx-5 max-md:hidden" />
            <div className=" md:hidden">Cart</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
