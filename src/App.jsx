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
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/courses/:title" element={<CourseContent />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

