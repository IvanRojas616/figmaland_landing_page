import React from "react";
import NavBar from "./NavBar";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Header = () => {
  return (
    <header className="base">
      <ResponsiveNavbar />
      <NavBar />
      <section className="flex flex-col justify-center items-center w-full h-screen">
        <h1 className="p_principal text-white md:pt-5 w-4/5 md:w-2/5 text-center">
          The best products start with Figma
        </h1>
        <p
          className="pb-16 text-2xl w-4/5 text-center mt-0 md:mt-5"
          style={{ fontFamily: " 'Roboto', sans-serif" }}
        >
          Most calendars are designed for teams.{" "}
          <span className="hidden md:inline">
            Slate is designed for freelancers
          </span>
        </p>
        <button className="btn_try mt-1 md:mt-10 px-10 md:px-5 py-2 md:py-3">
          Try for Free
        </button>
      </section>
    </header>
  );
};

export default Header;
