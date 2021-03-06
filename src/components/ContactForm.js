import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TwitterIcon from "../assets/img/twitter_blue.png";
import FBIcon from "../assets/img/fb_blue.png";
import InstaIcon from "../assets/img/instagram_blue.png";
import PinIcon from "../assets/img/pin_blue.png";
import MailIcon from "../assets/img/email.png";
import PhoneIcon from "../assets/img/phone_blue.png";

const ContactForm = () => {
  return (
    <section className="flex flex-col px-16 mb-10 w-full">
      <article className="flex flex-col justify-center  items-center">
        <h2 className="text-black text-5xl font-normal mb-12 md:mb-5 text-center ">
          Contact Us
        </h2>
        <h4 className="mb-12 md:mb-0 text-black text-2xl font-normal  w-12/12 md:w-5/12 text-center text-gray-800">
          Most calendars are designed for teams.
        </h4>
        <h4 className="hidden md:block md:text-black md:text-2xl md:font-normal md:w-5/12 md:text-center md:mb-14">
          Slate is designed for freelancers
        </h4>
      </article>
      <article className="flex flex-col-reverse md:flex-row justify-center w-full">
        <form className="mb-16 md:mb-0 py-5 px-8 rounded-md shadow-lg shadow-slate-400 w-full md:w-3/12 flex flex-col justify-center items-center">
          <h3 className="text-black font-bold text-center pt-8">Contact us</h3>
          <input
            className="mt-4 text-black  rounded-full w-full mx-5 bg-slate-200 p-4 focus:outline-none focus:shadow focus:shadow-slate-500"
            type="text"
            placeholder="Your name"
          />
          <input
            className="mt-4 text-black rounded-full w-full mx-5 bg-slate-200 p-3 focus:outline-none focus:shadow focus:shadow-slate-500"
            type="text"
            placeholder="Your email"
          />
          <textarea
            className="mt-4 bg-slate-200 p-3 h-48 w-full text-black focus:outline-none focus:shadow focus:shadow-slate-500"
            placeholder="Your message"
          />
          <div className="flex justify-start w-full">
            <button className="btn_try mt-2 py-2 px-9">Send</button>
          </div>
        </form>
        <div className="flex flex-col-reverse md:flex-col justify-center items-center w-full md:w-8/12 md:ml-10">
          <ul className="flex flex-col md:flex-row text-black w-full mt-10 mb-5 md:mr-20 ">
            <li className="flex flex-row md:flex-col md:justify-center items-center pl-2 md:pl-0 mb-2 md:mb-0">
              <img
                src={PinIcon}
                alt="pinner"
                className="mr-2  w-4 h-5 without_filters mb-2"
              />
              <h5 className="text-xs text-left md:text-center w-4/5 md:w-5/5">
                6386 Spring St undefined Anchorage, Georgia 12473 United States
              </h5>
            </li>
            <li className="flex flex-row md:flex-col justify-start md:justify-center items-center md:w-2/5 md:pr-24 mb-2 md:mb-0">
              <img
                src={PhoneIcon}
                alt="phone"
                className="mx-2 w-4 h-5 without_filters mb-2"
              />
              <h5 className="text-xs text-left md:text-center w-4/5">
                6386 (843) 555-0130
              </h5>
            </li>
            <li className="flex flex-row md:flex-col justify-start md:justify-center items-center pr-5 mb-2 md:mb-0">
              <img
                src={MailIcon}
                alt="mail"
                className="mx-2 w-4 h-5 without_filters mb-2"
              />
              <h5 className="text-xs text-left md:text-center">
                willie.jennings@example.com
              </h5>
            </li>
          </ul>

          <div className="hidden md:block md:w-4/5 md:h-3/5">
            <MapContainer
              className="hidden md:block md:w-full md:h-full"
              center={[37.7747126, -122.4341086]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
          <ul className="flex flex-row justify-center md:justify-start pr-5 md:pl-6 w-full mt-10">
            <li>
              <img
                src={TwitterIcon}
                alt="twitter"
                className="mr-2 w-6 h-6 without_filters"
              />
            </li>
            <li>
              <img
                src={FBIcon}
                alt="fb"
                className="mx-2 w-6 h-6 without_filters"
              />
            </li>
            <li>
              <img
                src={InstaIcon}
                alt="instagram"
                className="mx-2 w-6 h-6 without_filters"
              />
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default ContactForm;
