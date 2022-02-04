import React from "react";
import TwitterIcon from '../assets/img/twitter.png';
import FBIcon from '../assets/img/fb.png';
import InstaIcon from '../assets/img/instagram.png';

const NavBar = () => {
  const options = ["Home", "Product", "Pricing", "About", "Contact"];
  return (
    <nav className="hidden md:flex md:flex-row md:items-center w-full md:px-24 md:pt-10">
      <ul className="flex flex-row  justify-start items-center ml-36">
        {options.map((opt, index) => {
          return <li key={index} className="text-white font-black text-xs mx-3 without_filters">{opt}</li>;
        })}
        <li><img src="https://s3-alpha-sig.figma.com/img/dee8/75d6/947120449f1b8aa45044619ccdd5e98a?Expires=1644796800&Signature=apBrUHkvagO1aOcu-3asvOjFOIlr5jV4s6HlbyxBKT0W~~lNFQth98J2AbysiI7Imzz6vNiw9iW9JiRmb7bhPuLayRoLkxKbL7n07QiEEzRXuSiHBrj4J0YFt3sdhlLKhm5ZBmZmgSFesW6uE624KV~PmSUSZrBEMihheprXRvmuT5pFwRUEkFomiMp3C1HPyOkfn3Pvgn-QTGW6Tv4hcgXL2VKKXkgQizlGv7m-UTZu36YJoPVidOfVTc7BtlKIcWuPTT3iDP-XOLYPi4IuNItGQ1TLSp1DOTtTyJ0Rsw-hD2HZ~8ez9F1QtZ2qPHq3UkDKxPxtuW0mjr5O21TEkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="logo_figmaland" className="mr-72 ml-10 w-32 pb-2 h-8 without_filters"/></li>
        <li><img src={TwitterIcon}alt="twitter" className="mx-2 w-6 h-6 without_filters"/></li>
        <li><img src={FBIcon}alt="fb" className="mx-2 w-6 h-6 without_filters"/></li>
        <li><img src={InstaIcon}alt="instagram" className="mx-2 w-6 h-6 without_filters"/></li>
      </ul>
    </nav>
  );
};

export default NavBar;
