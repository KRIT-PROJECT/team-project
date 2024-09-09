import Courses from "./Courses";
import Demos from "./Demos";
import Features from './Features';
import Contact from './Contact';
import Slider from "./Slider";
import AllCourse from "./AllCourse"
import Reviews from "./Reviews"
const Body = () => {
  return (
    <>
      <div>
        <Slider />
        <Courses />
        <Demos/>
        <AllCourse/>
        <Features/>
        <Reviews/>
        <Contact/>
      </div>
    </>
  );
};
export default Body;