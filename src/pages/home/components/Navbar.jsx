import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import useAuth from "../../../Hooks/useAuth";
import { RiSearchLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { useSearch } from "../../../Hooks/SearchProvider";

const Navbar = () => {
  const [drop, setDrop] = useState(false);
  const { user, logout } = useAuth();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(true);
  const [theme, setTheme] = useState(false);
  const navigate = useNavigate();
  const { handleSearch } = useSearch();
  const searchRef = useRef(null);

  const handleLogOut = () => {
    logout();
  };

  const handleDropDrown = () => {
    setDrop(!drop);
  };

  const handleSearchdrop = () => {
    setSearch(!search);
    setShow(false);
    navigate("/allservices");
  };

  const handleToggle = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      setTheme(storedTheme === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-theme", theme ? "night" : "light");
  }, [theme]);

  const onSearch = (e) => {
    handleSearch(e.target.value);
  };

  const navlist = (
    <>
      <li onClick={() => setDrop(false)}>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allservices"}>Services</NavLink>
      </li>
      {user && (
        <li className="">
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
      )}
      <li
        onClick={handleSearchdrop}
        className="md:flex hidden items-center pl-4"
      >
        <RiSearchLine size={20} />
      </li>
    </>
  );

  const handleMenuBar = (e) => {
    const isChecked = e.target.checked;
    setShow(isChecked);
    setDrop(false);
  };

  // Click outside and scroll to close search field
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearch(true);
      }
    };

    const handleScroll = () => {
      setSearch(true);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchRef]);

  return (
    <div className="relative w-full">
      <div className="shadow-md">
        <div className="navbar max-w-7xl w-[95%] mx-auto">
          <div className="navbar-start">
            <div className="flex gap-12 items-center">
              <Link to={"/"} className="text-3xl font-bold">
                <img className="h-14" src="/logo.png" alt="" />
              </Link>

              <div className="navbar-center hidden lg:flex">
                <ul className="flex justify-center gap-5 uppercase py-2 text-[14px] font-medium">
                  {navlist}
                </ul>
              </div>
            </div>
          </div>
          <div className="navbar-end gap-3">
            <button
              onClick={handleSearchdrop}
              className="flex md:flex lg:hidden items-center pl-4"
            >
              <RiSearchLine size={20} />
            </button>
            <div className="hidden md:flex items-center gap-3">
              {!user && (
                <Link to={"/login"} className="btn">
                  Login
                </Link>
              )}

              {user && (
                <>
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={user.photoURL}
                        />
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-outline" onClick={handleLogOut}>
                    Logout
                  </button>
                </>
              )}
            </div>
            <div className="hidden md:flex justify-end gap-3">
              <div
                onClick={handleToggle}
                className="btn btn-outline rounded-full"
              >
                {theme ? (
                  <MdDarkMode size={25} />
                ) : (
                  <CiDark color="black" size={25} />
                )}
              </div>
            </div>
            <div>
              <label
                onChange={handleMenuBar}
                className="btn btn-circle lg:hidden swap swap-rotate"
              >
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-center shadow-inne"></div>
      </div>
      <div
        ref={searchRef}
        className={`w-full ${
          search
            ? "-top-72 delay-300 absolute duration-1000"
            : "top-24 fixed duration-300"
        } bg-[#18324be1] z-50`}
      >
        <div className="max-w-[80%] mx-auto flex justify-between items-center">
          <div className=""></div>
          <div>
            <div className="flex">
              <input
                onChange={onSearch}
                type="text"
                placeholder="Type Words"
                className="bg-transparent text-white font-bold text-xl outline-none w-full py-4"
              />
            </div>
            <div
              className={`float-left h-[1px] mb-3 bg-white ${
                search ? "w-0 duration-300" : "w-full duration-1000"
              }`}
            ></div>
          </div>
          <div className="">
            <h2
              onClick={() => handleSearchdrop(setSearch(false))}
              className="text-white border-2 rounded-full p-1 font-bold"
            >
              <RxCross1 size={15} />
            </h2>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden bg-[#e4dfdf44] pt-4 pb-5 border-t h-full w-full ${
          show ? "duration-500 h-full" : "hidden h-0 duration-500"
        }`}
      >
        <ul className="flex flex-col gap-3 pl-6">
          <div className="flex md:hidden gap-3 items-center">
            <div
              onClick={handleToggle}
              className="btn btn-sm btn-outline rounded-full"
            >
              {theme ? (
                <MdDarkMode size={25} />
              ) : (
                <CiDark color="black" size={25} />
              )}
            </div>
            <div className="flex md:hidden items-center gap-3">
              {!user && (
                <Link to={"/login"} className="btn">
                  Login
                </Link>
              )}

              {user && (
                <>
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-sm btn-ghost btn-circle avatar"
                    >
                      <div className="w-7 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={user.photoURL}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
          {navlist}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
