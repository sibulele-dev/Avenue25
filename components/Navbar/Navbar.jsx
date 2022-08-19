<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { Navlinks } from "../../utils/Navlinks";
import Button from "../Button/Button";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('transparent')
  const isOpen = () => {
    setOpen(!open);
  };

  // this sets the active stte to null and when an active class is selected, sets it

=======
import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { ImCross } from 'react-icons/im';

function Navbar() {
  const [navLinks, setLinks] = useState([
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Pricing',
      href: '/pricing',
    },
    {
      name: 'Services',
      href: '/services',
    },
  ]);
>>>>>>> 2f85485ec0a6a3da858157981f8e1de5d533fd61
  const [active, setActive] = useState(null);

  return (
    <>
      {/* Nav Container */}
<<<<<<< HEAD
      <nav className="bg-white fixed top-0  w-full z-10 ease-in-out duration-300">
        <div className="max-w-[1400px] justify-between md:flex px-7 md:px-10 py-4">
          {/* Logo */}
          <div className="md:flex justify-center items-center flex-shrink-0">
            <a href="/" className="font-bold text-2xl cursor-pointer">
              Avenue<span className="text-blue-500">25</span>
            </a>
          </div>

          {/* Nav links */}
          <ul className={` md:flex items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] w-full left-0 md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-16': 'top-[-460px]'}`}>
            {Navlinks.map((link, i) => (
              <li key={i} className="uppercase text-black px-4 text-base md:ml-8 md:my-0 my-7">
                <Link
                  href={link.href}
                  onClick={() => setActive(link)}
                  className={`text-black ${
                    active == link && "active:text-blue-500"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <Button>Get in touch</Button>
          </ul>


          {/* Mobile Menu Buttons */}
          <div className="block md:hidden z-[11] absolute top-5 right-4 text-base text-black cursor-pointer"  onClick={() => setOpen(!open)}>
            {open ? <ImCross size={20} className="font-light"/> : <GoThreeBars size={30} />}
=======
      <nav className="shadow-sm sticky top-0 w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            {/* first block outer section */}
            <div className="flex items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0">
                <a href="" className="font-bold text-xl cursor-pointer">
                  Avenue<span className="text-blue-500">25</span>
                </a>
              </div>
              {/*  */}
              <div className="hidden md:">
                <div className="flex ml-10 items-baseline space-x-4">
                  {navLinks.map((link, i) => {
                    return (
                      <a
                        href=""
                        key={i}
                        onClick={() => setActive(link)}
                        className={`cursor-pointer text-black {active == link && 'active:text-blue-500'}`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
>>>>>>> 2f85485ec0a6a3da858157981f8e1de5d533fd61
          </div>
          
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
