import React from 'react';
import NavBar from './NavBar';
const Header = () => {
  return (
  <header className='base'>
    <NavBar/>
    <section className='flex flex-col justify-center items-center w-full h-screen'>
      <h1 className='p_principal text-white pt-5 w-2/5 text-center'>The best products start with Figma</h1>
      <p>Most calendars are designed for teams. Slate is designed 
for freelancers</p>
<button className='btn_try mt-10 px-5 py-3'>Try for Free</button>
    </section>
  </header>);
}; 

export default Header;
