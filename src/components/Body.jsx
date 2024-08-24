import Courses from "./Courses";
import Demos from "./Demos";
import Features from './Features';
import Contact from './Contact';
import Slider from "./Slider";

const Body = () => {
  return (
    <>
      <div>
        <Slider />
        <Courses  />
        <Demos/>
        <Features/>
        <Contact/>
      </div>
    </>
  );
};
export default Body;