import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white py-4 px-8 flex justify-between items-center">
        <Link href="/">
          <div className="cursor-pointer">
            <Image src={Logo} width={140} height={25} alt="logo" />
          </div>
        </Link>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/female">
              <div className="cursor-pointer">Female</div>
            </Link>
          </li>
          <li>
            <Link href="/male">
              <div className="cursor-pointer">Male</div>
            </Link>
          </li>
          <li>
            <Link href="/kids">
              <div className="cursor-pointer">Kids</div>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <div className="cursor-pointer">All Products</div>
            </Link>
          </li>
        </ul>

        <div className="relative flex items-center">
          <div className="search-bar flex items-center mr-4">
            <CiSearch className="mr-2" />
            <input
              type="text"
              placeholder="What you looking for"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
