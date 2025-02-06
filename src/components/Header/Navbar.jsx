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
    <nav className="py-4">
      <div className="container-fluid px-6 mx-auto text-center flex justify-between items-center">
        <button
          className="text-black text-2xl md:hidden nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`nav-left md:flex bg-gray-400 z-50 absolute md:static top-16 left-0 w-full md:w-auto md:bg-transparent transition-all duration-300 ease-in ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li className="flex items-center md:p-0">
            <Link
              to="/"
              className="underline uppercase border-[.1rem] rounded-full px-9 py-0 border-blue-600"
            >
              about
            </Link>
          </li>
          <li className="flex items-center md:p-0">
            <Link
              to="/about"
              className="underline text-blue-600 uppercase border-[.1rem] rounded-full px-9 py-0 border-blue-600"
            >
              Services
            </Link>
          </li>
          <li className="flex items-center md:p-0">
            <Link
              to="/contact"
              className="underline uppercase border-[.1rem] rounded-full px-9 py-0 border-blue-600"
            >
              Doctors
            </Link>
          </li>
        </ul>

        <Link
          to="/"
          className="nav-logo text-black uppercase text-5xl font-bold"
        >
          Royal Dent
        </Link>

        <ul
          className={`nav-right bg-gray-400 z-50 md:flex text-black absolute md:static top-[9rem] left-0 w-full md:w-auto md:bg-transparent transition-all duration-300 ease-in ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li className="flex items-center md:p-0">
            <Link
              to="/"
              className="underline uppercase border-[.1rem] rounded-full px-9 py-0 border-blue-600"
            >
              Testimonials
            </Link>
          </li>
          <li className="flex items-center md:p-0">
            <Link
              to="/about"
              className="underline uppercase border-[.1rem] rounded-full px-9 py-0 border-blue-600"
            >
              FQAs
            </Link>
          </li>
          <li className="flex items-center md:p-0">
            <Link
              to="/contact"
              className="underline uppercase border-[.1rem] rounded-full px-9 py-0 border-blue-600"
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
