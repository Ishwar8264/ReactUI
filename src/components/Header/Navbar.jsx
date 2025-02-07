import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.to([".nav-left", ".nav-logo", ".nav-right", ".nav-hamburger"], {
      opacity: 1,
      y: 10,
      duration: 1.5,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, []);

  return (
    <nav className="pb-4">
      <div className="container-fluid xl:container pb-10 sm:pb-0 px-6 bg-slate-500 sm:bg-white mx-auto text-center flex justify-between items-center">
        <button
          className={`text-black text-2xl md:hidden nav-hamburger transition-transform duration-300 ${
            menuOpen ? "rotate-90" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`nav-left flex flex-col px-10 md:flex-row bg-slate-500 z-50 absolute sm:top-0 md:static top-10 left-0 w-full md:w-auto md:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-5"
          } md:opacity-100 md:visible md:translate-y-0`}
        >
          <li className="flex items-center mt-3 mx-0 w-full sm:my-0 sm:mx-0 md:p-0 md:w-auto">
            <Link
              to="/"
              className="underline uppercase border-[.1rem] rounded-full px-4 py-2 md:px-9 md:py-0 border-blue-600 w-full text-center"
            >
              about
            </Link>
          </li>
          <li className="flex items-center my-1 mx-0 w-full sm:my-0 sm:mx-0 md:p-0 md:w-auto">
            <Link
              to="/about"
              className="underline text-blue-600 uppercase border-[.1rem] rounded-full px-4 py-2 md:px-9 md:py-0 border-blue-600 w-full text-center"
            >
              Services
            </Link>
          </li>
          <li className="flex items-center my-1 mx-0 w-full sm:my-0 sm:mx-0 md:p-0 md:w-auto">
            <Link
              to="/contact"
              className="underline uppercase border-[.1rem] rounded-full px-4 py-2 md:px-9 md:py-0 border-blue-600 w-full text-center"
            >
              Doctors
            </Link>
          </li>
        </ul>

        <Link
          to="/"
          className="nav-logo text-black sm:mb-0 uppercase text-4xl sm:text-5xl font-bold"
        >
          Royal Dent
        </Link>

        <ul
          className={`nav-right flex px-10 flex-col md:flex-row bg-slate-500 z-50 md:static absolute top-[12rem] sm:top-[9rem] left-0 w-full md:w-auto md:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-5"
          } md:opacity-100 md:visible md:translate-y-0`}
        >
          <li className="flex items-center my-1 mx-0 w-full sm:my-0 sm:mx-0 md:p-0 md:w-auto">
            <Link
              to="/"
              className="underline uppercase border-[.1rem] rounded-full px-4 py-2 md:px-9 md:py-0 border-blue-600 w-full text-center"
            >
              Testimonials
            </Link>
          </li>
          <li className="flex items-center my-1 mx-0 w-full sm:my-0 sm:mx-0 md:p-0 md:w-auto">
            <Link
              to="/about"
              className="underline uppercase border-[.1rem] rounded-full px-4 py-2 md:px-9 md:py-0 border-blue-600 w-full text-center"
            >
              FQAs
            </Link>
          </li>
          <li className="flex pb-5 sm:pb-0 items-center my-1 mx-0 w-full sm:my-0 sm:mx-0 md:p-0 md:w-auto">
            <Link
              to="/contact"
              className="underline uppercase border-[.1rem] rounded-full px-4 py-2 md:px-9 md:py-0 border-blue-600 w-full text-center"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
