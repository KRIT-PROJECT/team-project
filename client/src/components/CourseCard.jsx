import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

const CourseCard = ({ title, Stars, Image }) => {
  
  return (
    <>
      <div className=" bg-gradient-to-r from-[#292E49] to-[#536976] h-32 w-60 rounded-xl cursor-pointer ">
        <Link to={"/courses/"+title}>
         <div className="bg-white h-14 w-14 relative left-[186px] flex justify-center items-center rounded-tl-xl rounded-bl-xl rounded-tr-xl overflow-hidden">
          <img 
            src={Image} 
            alt="" 
            className="h-full w-full object-contain " 
          />
         </div>
         <div className="flex flex-col gap-1">
          <h1 className="text-white font-bold text-xl text-left px-5">
            {title}
          </h1>
          <div className="flex justify-evenly w-[80%] px-3">
            {[...Array(Stars)].map((_, index) => (
              <IoStar key={index} color="#FFDE4D" size="1.5em" />
            ))}
            {[...Array(5 - Stars)].map((_, index) => (
              <IoStar key={index + Stars} color="white" size="1.5em" />
            ))}
          </div>
         </div>
        </Link>
      </div>  
    </>
  );
};

export default CourseCard;