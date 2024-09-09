import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#120E31] text-white py-10"id='aboutus' >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full mb-6 text-center md:w-1/4 md:mb-0">
            <h1 className="mb-4 text-xl font-bold text-white">About the company</h1>
            <p className="mb-4 text-base text-white">
              Learn To Love Growth <br/> 
              And Change And You Will <br/> 
              Be A Success. Microsoft <br/> 
              Patch
            </p>
            <div className="flex justify-center space-x-4">
              <FaFacebookF className="text-3xl text-blue-600" />
              <AiOutlineYoutube className="text-3xl text-red-600" />
              <FaLinkedinIn className="text-3xl text-blue-600" />
              <AiOutlineInstagram className="text-3xl text-pink-600" />
            </div>
          </div>
          <div className="w-full mb-6 text-center md:w-1/4 md:mb-0 md:text-left">
            <h5 className="mb-2 text-xl font-semibold">Products</h5>
            <ul className="space-y-2 text-base">
              <li>CSR Activities</li>
              <li>Green Banking</li>
              <li>News</li>
              <li>Ongoing Campaign</li>
              <li>Updates</li>
            </ul>
          </div>
          <div className="w-full mb-6 text-center md:w-1/4 md:mb-0 md:text-left">
            <h5 className="mb-2 text-xl font-semibold">Get Started</h5>
            <ul className="space-y-2 text-base">
              <li>Career</li>
              <li>Contact Us</li>
              <li>Government Securities</li>
              <li>Examples</li>
              <li>NIS</li>
            </ul>
          </div>
          <div className="w-full text-center md:w-1/4 md:text-left">
            <h5 className="mb-2 text-xl font-semibold">About</h5>
            <ul className="space-y-2 text-base">
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
