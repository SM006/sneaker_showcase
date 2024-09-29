import React from 'react';
import Logo from '../assets/logo.png';
import { IoMdMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "About",
    link: "#",
  },
  {
    id: 4,
    title: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <div className='text-white py-8'>
      <div className="container flex justify-between items-center">
        <div>
          <img src={Logo} alt="Logo" className='max-w-[100px] invert'/>
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.link}
                  className="inline-block text-base font-semibold py-2 px-1 uppercase hover:text-gray-200 hover:border-b-2 hover:border-white transition-all duration-300 cursor:pointer"
                >
                  {item.title}
                </a>
              </li>
            ))}

            <button className='text-xl px-14'>
              <FaRegUser />
            </button>
          </ul>
        </div>

        <div className='md:hidden'>
          <IoMdMenu className='text-4xl' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
