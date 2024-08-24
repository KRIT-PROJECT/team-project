import './App.css';

import Body from './components/Body';
import ContactUs from './components/Contact';
import CourseContent from './components/CourseContent';
import Courses from './components/Courses';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-[#f7f7f7] h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/courses/:title" element={<CourseContent />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Contact Us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

