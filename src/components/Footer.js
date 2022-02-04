import React from "react";
import PhoneIcon from '../assets/img/phone.png';
import PinIcon from '../assets/img/pin.png';
import TwitterIcon from '../assets/img/twitter.png';
import FBIcon from '../assets/img/fb.png';
import InstaIcon from '../assets/img/instagram.png';

const Footer = () => {
  const firstColNames = ["Pages", "Home", "Product", "Pricing", "About", "Contact"];
  const secondColNames = ["Tomothy", "Eleanor Edwards", "Ted Robertson", "Annette Russell","Jennie Mckinney", "Gloria Richards"];
  const thirdColNames = ["Jane Black", "Philip Jones", "Product", "Colleen Russell", "Marvin Hawkins", "Bruce Simmmons"];
  return (
    <footer style={{background: "#252B42",}} className="flex flex-col md:flex-row justify-center py-16 items-center">
      <div className="flex flex-col md:flex-row">
      <ul className="mx-12"><LittleList names={firstColNames}/></ul>
      <ul className="mx-12"><LittleList names={secondColNames}/></ul>
      <ul className="mx-12"><LittleList names={thirdColNames}/></ul>
      </div>
      <div className="flex flex-col items-start">
      <ul className="ml-20">
        <IconWithInfo icon={PinIcon} content='7480 Mockingbird Hill undefined '/>
        <IconWithInfo icon={PhoneIcon} content='(239) 555-0108'/>
      </ul>
      <ul className="flex flex-row justify-start ml-20 mt-5">
      <li><img src={TwitterIcon}alt="twitter" className="mr-2 w-6 h-6 without_filters"/></li>
        <li><img src={FBIcon}alt="fb" className="mx-2 w-6 h-6 without_filters"/></li>
        <li><img src={InstaIcon}alt="instagram" className="mx-2 w-6 h-6 without_filters"/></li>
      </ul>

      </div>
    </footer>
  );
};

const LittleList = ({ names }) => {
  return (
    <>
      {names.map((name, index) => {
        if (index === 0) {
          console.log(index)
          return <li className="font-bold mb-4" key={index}>{name}</li>;
        }
        return <li className="mb-3 text-sm" key={index}>{name}</li>;
      })}
    </>
  );
};

const IconWithInfo = ({icon, content}) => {
  return(
    <li className="flex flex-row flex-start my-2">
      <img src={icon} className="w-4 h-4 mr-2" alt={icon}/>
      <p className="text-xs font-medium">{content}</p>
    </li>
  )
}

export default Footer;
