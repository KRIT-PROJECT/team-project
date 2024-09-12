import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="py-16 text-white bg-gradient-to-r from-[#292E49] to-[#536976]" id='aboutus'>
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-2xl font-bold">About the Company</h1>
            <p className="mb-6 text-[16px]">
              Learn to love growth and change and you will be a success. <br /> Microsoft Patch.
            </p>
            <div className="flex justify-center space-x-6 lg:justify-start">
              <a href="#" className="transition-transform transform hover:scale-125">
                <FaFacebookSquare className="text-3xl text-blue-500" />
              </a>
              <a href="#" className="transition-transform transform hover:scale-125">
                <AiFillYoutube className="text-3xl text-red-600" />
              </a>
              <a href="#" className="transition-transform transform hover:scale-125">
                <FaLinkedin className="text-3xl text-blue-700" />
              </a>
              <a href="#" className="transition-transform transform hover:scale-125">
                <FaInstagramSquare className="text-3xl text-pink-500" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="text-center lg:text-left">
            <h5 className="mb-4 text-xl font-semibold">Products</h5>
            <ul className="space-y-3 text-[16px]">
              <li className="hover:underline">CSR Activities</li>
              <li className="hover:underline">Green Banking</li>
              <li className="hover:underline">News</li>
              <li className="hover:underline">Ongoing Campaign</li>
              <li className="hover:underline">Updates</li>
            </ul>
          </div>

          {/* Get Started */}
          <div className="text-center lg:text-left">
            <h5 className="mb-4 text-xl font-semibold">Get Started</h5>
            <ul className="space-y-3 text-[16px]">
              <li className="hover:underline">Career</li>
              <li className="hover:underline">Contact Us</li>
              <li className="hover:underline">Government Securities</li>
              <li className="hover:underline">Examples</li>
              <li className="hover:underline">NIS</li>
            </ul>
          </div>

          {/* About */}
          <div className="text-center lg:text-left">
            <h5 className="mb-4 text-xl font-semibold">About</h5>
            <ul className="space-y-3 text-[16px]">
              <li className="hover:underline">IPDC at a Glance</li>
              <li className="hover:underline">Mission, Vision & Values</li>
              <li className="hover:underline">Corporate Governance</li>
              <li className="hover:underline">Shareholders</li>
              <li className="hover:underline">Investor Relations</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
