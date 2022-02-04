import React, { useState } from "react";
import BurgerIcon from "../assets/img/burger_menu.png";

const ResponsiveNavbar = () => {
  const options = ["Home", "Product", "Pricing", "About", "Contact"];
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav
      className={`md:hidden flex flex-row items-center w-12/12 ${
        showMenu ? "p-0 " : "px-8 pt-2"
      } `}
    >
      <div
        className={`h-screen w-full bg-cyan-900 ${
          showMenu
            ? "flex flex-col items-center justify-center z-10 opacity-50"
            : "hidden z-0 opacity-0"
        } `}
      >
        <ul className="flex flex-col items-center justify-center w-full">
          {options.map((opt, index) => {
            return (
              <li
                key={index}
                className="text-white font-black text-3xl mx-3 my-6 without_filters"
              >
                {opt}
              </li>
            );
          })}
          <li className="w-full flex justify-center">
            <button
              onClick={(e) => {
                setShowMenu(!showMenu);
              }}
            >
              <img
                src="https://img.icons8.com/ios/150/000000/menu-squared-2--v2.png"
                alt="quit_menu"
                className="mx-2 w-6 h-6 without_filters"
              />
            </button>
          </li>
        </ul>
      </div>
      <ul
        className={` ${
          showMenu ? "hidden" : "flex justify-between items-center"
        }`}
      >
        <li>
          <img
            src="https://s3-alpha-sig.figma.com/img/dee8/75d6/947120449f1b8aa45044619ccdd5e98a?Expires=1644796800&Signature=apBrUHkvagO1aOcu-3asvOjFOIlr5jV4s6HlbyxBKT0W~~lNFQth98J2AbysiI7Imzz6vNiw9iW9JiRmb7bhPuLayRoLkxKbL7n07QiEEzRXuSiHBrj4J0YFt3sdhlLKhm5ZBmZmgSFesW6uE624KV~PmSUSZrBEMihheprXRvmuT5pFwRUEkFomiMp3C1HPyOkfn3Pvgn-QTGW6Tv4hcgXL2VKKXkgQizlGv7m-UTZu36YJoPVidOfVTc7BtlKIcWuPTT3iDP-XOLYPi4IuNItGQ1TLSp1DOTtTyJ0Rsw-hD2HZ~8ez9F1QtZ2qPHq3UkDKxPxtuW0mjr5O21TEkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="logo_figmaland"
            className=" w-48 pb-2 mr-72 h-auto without_filters"
          />
        </li>
        <li>
          <button
            onClick={(e) => {
              setShowMenu(!showMenu);
            }}
          >
            <img
              src={BurgerIcon}
              alt="menu"
              className="mx-2 w-6 h-6 without_filters"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ResponsiveNavbar;
