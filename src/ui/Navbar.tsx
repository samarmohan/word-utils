import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between px-2 py-3 bg-green-500 mb-3">
        <div className="container px-4 mx-auto flex justify-between">
          <Link
            className="ml-3 text-lg font-bold leading-relaxed py-2 whitespace-nowrap uppercase text-white"
            to="/"
          >
            <img src={logo} alt="logo" width="40" />
          </Link>

          <Link
            className="ml-3 text-lg font-bold leading-relaxed mr-4 py-3 whitespace-nowrap uppercase text-white"
            to="/"
          >
            Word Utils
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Menu>
                  <MenuButton>
                    <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                      <i className="fad fa-history text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2">Reverse</span>
                    </p>
                  </MenuButton>
                  <MenuList>
                    <Link to="/reverse/words">
                      <MenuItem>Words in place</MenuItem>
                    </Link>
                    <Link to="/reverse/sentence">
                      <MenuItem>Sentences</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </li>
              <li className="nav-item">
                <Menu>
                  <MenuButton>
                    <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                      <i className="fas fa-language text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2">Translate</span>
                    </p>
                  </MenuButton>
                  <MenuList>
                    <a href="/translate/pig-latin">
                      <MenuItem>Pig Latin</MenuItem>
                    </a>
                    <a href="/translate/morse-code">
                      <MenuItem>Morse Code</MenuItem>
                    </a>
                  </MenuList>
                </Menu>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/capitalize-random-letters/"
                >
                  <i className="fad fa-random text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Randomly Capitalize</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  target="_blank"
                  to="https://github.com/samarmohan/word-utils"
                  rel="noreferrer"
                >
                  <i className="fab fa-github text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Github</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
