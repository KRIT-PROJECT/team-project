import './App.css';

import Body from './components/Body';
import ContactUs from './components/Contact';
import CourseContent from './components/CourseContent';
import Courses from './components/Courses';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Popupcontact from './components/Popupcontact';
import Features from './components/Features'
import Demo from './components/Demos'
import Reviews from './components/Reviews'
import FloatingWhatsApp from './components/FloatingWhatsapp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Popupcontact/>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/courses/:title" element={<CourseContent />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Contact Us" element={<ContactUs />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Demo Videos" element={<Demo />} />
          <Route path="/Reviews" element={<Reviews />} />
        </Routes>
        <FloatingWhatsApp/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

