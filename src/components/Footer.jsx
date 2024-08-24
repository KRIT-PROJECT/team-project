import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#120E31] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center">
            <h1 className="text-xl font-bold text-white mb-4">About the company</h1>
            <p className="text-base text-white mb-4">
              Learn To Love Growth <br/> 
              And Change And You Will <br/> 
              Be A Success. Microsoft <br/> 
              Patch
            </p>
            <div className="flex justify-center space-x-4">
              <FaFacebookF className="text-blue-600 text-3xl" />
              <AiOutlineYoutube className="text-red-600 text-3xl" />
              <FaLinkedinIn className="text-blue-600 text-3xl" />
              <AiOutlineInstagram className="text-pink-600 text-3xl" />
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
            <h5 className="text-xl font-semibold mb-2">Products</h5>
            <ul className="text-base space-y-2">
              <li>CSR Activities</li>
              <li>Green Banking</li>
              <li>News</li>
              <li>Ongoing Campaign</li>
              <li>Updates</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
            <h5 className="text-xl font-semibold mb-2">Get Started</h5>
            <ul className="text-base space-y-2">
              <li>Career</li>
              <li>Contact Us</li>
              <li>Government Securities</li>
              <li>Examples</li>
              <li>NIS</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="text-xl font-semibold mb-2">About</h5>
            <ul className="text-base space-y-2">
              <li>IPDC at a Glance</li>
              <li>Mission, Vision & Values</li>
              <li>Corporate Governance</li>
              <li>Shareholders</li>
              <li>Investor Relations</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
