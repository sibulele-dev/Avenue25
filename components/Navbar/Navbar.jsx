import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { GoThreeBars } from "react-icons/go";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [navLinks, setLinks] = useState([
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Services",
      href: "/services",
    },
  ]);
  const [active, setActive] = useState(null);

  return (
    <>
      {/* Nav Container */}
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
                      className={`cursor-pointer text-b {active ==}`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
