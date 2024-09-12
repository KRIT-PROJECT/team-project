// src/components/FloatingWhatsApp.js
import React from 'react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      className="fixed z-50 flex items-center justify-center w-16 h-16 transition-colors bg-green-500 rounded-full shadow-lg bottom-4 right-4 hover:bg-green-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp"
        className="w-10 h-12"
      />
    </a>
  );
};

export default FloatingWhatsApp;
