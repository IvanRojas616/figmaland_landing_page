import React from "react";
import Icon1 from "../assets/img/icon1.png";
import Icon2 from "../assets/img/icon2.png";
import Icon3 from "../assets/img/icon3.png";

const Features = () => {
  return (
    <section className="flex flex-col p-10">
      <article className="flex flex-col justify-center items-center">
        <h2 className="text-black text-5xl font-normal mb-5">Features</h2>
        <h4 className="text-black text-2xl font-normal w-5/12 text-center">
          Most calendars are designed for teams. 
        </h4>
        <h4 className="text-black text-2xl font-normal w-5/12 text-center mb-14"> 
          Slate is designed for freelancers
        </h4>
      </article>
      <article>
        <ul className="flex justify-evenly text-black">
          <li className="flex flex-col justify-center items-center">
            <img src={Icon1} className="w-8 h-8 mb-10" alt="icon1" />
            <h3 className="font-black w-48 text-center">OpenType features Variable fonts</h3>
            <p className="text-center w-48 mt-7 ">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <img src={Icon2} className="w-8 h-8 mb-10" alt="icon2" />
            <h3 className="font-black w-48 text-center">Design with real data</h3>
            <p className="text-center w-48 mt-7 ">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <img src={Icon3} className="w-8 h-8 mb-10" alt="icon3" />
            <h3 className="font-black w-48 text-center">Fastest way to take action</h3>
            <p className="text-center mt-7 w-48">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </li> 
        </ul>
      </article>
      <div className="w-full h-full mt-16 flex justify-center items-center mb-24"> 
      <video  className="custom_video w-8/12 rounded-md shadow-gray-500 shadow-md">
      </video>
      </div>
    </section>
  );
};

export default Features;
