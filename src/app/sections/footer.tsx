import React from 'react';
import Image from 'next/image';
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="footer grid grid-cols-4">
        <div className="logo flex flex-col justify-between w-80">
          <Image src={logo} width={180} height={30} alt="logo" />
          <p className="text-gray-600">
            Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
          </p>
          <div className="icon-container flex gap-4">
            <div className="p-2 bg-gray-100 rounded-full cursor-pointer">
              <GrTwitter size={20} />
            </div>
            <div className="p-2 bg-gray-100 rounded-full cursor-pointer">
              <GrFacebookOption size={20} />
            </div>
            <div className="p-2 bg-gray-100 rounded-full cursor-pointer">
              <GrLinkedinOption size={20} />
            </div>
          </div>
        </div>

        <div className="footer-links">
          <h3 className="font-bold text-lg leading-19 text-gray-600">Company</h3>
          <ul>
            <li className="text-gray-600">About</li>
            <li className="text-gray-600">Terms of Use</li>
            <li className="text-gray-600">Privacy Policy</li>
            <li className="text-gray-600">How it Works</li>
            <li className="text-gray-600">Contact Us</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3 className="font-bold text-lg leading-19 text-gray-600">Support</h3>
          <ul>
            <li className="text-gray-600">Support Carrer</li>
            <li className="text-gray-600">24h Service</li>
            <li className="text-gray-600">Quick Chat</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3 className="font-bold text-lg leading-19 text-gray-600">Contact</h3>
          <ul>
            <li className="text-gray-600">Whatsapp</li>
            <li className="text-gray-600">Support 24h</li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p className="m-6">
          Copyright © 2022 Dine Market
        </p>
        <p className="m-6">
          Code by. <span className="font-bold text-gray-900">Abdulahad-xd on GitHub</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
