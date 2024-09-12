import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" id='contactus'>
      <div className="flex flex-col w-full max-w-4xl p-8 bg-white rounded-lg shadow-2xl md:flex-row ">
        <div className="flex items-center justify-center mb-8 md:w-1/2 md:mb-0">
          <img
            src="https://template2.spayee.com/s/pages/assets/images/contactus.png"
            alt="Contact Us"
            className="object-contain w-24 h-24 md:w-48 md:h-48"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="mb-4 text-2xl font-bold text-center text-red-600 md:text-3xl md:mb-6">CONTACT US</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact No."
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full p-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

