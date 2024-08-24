import CourseCard from "./CourseCard";
const Courses = () =>{
  const CourseData = [
    {title:"SNOWFLAKE",Stars:4,Image:"https://static.vecteezy.com/system/resources/previews/000/581/878/original/snowflake-icon-vector-illustration.jpg"},
    {title:"SQL",Stars:3,Image:"https://logodix.com/logo/541959.jpg"},
    {title:"PYTHON",Stars:5,Image:"https://logohistory.net/wp-content/uploads/2023/06/Python-Emblem.png"},
    {title:"JAVA",Stars:4,Image:"https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png"},
    {title:"C++",Stars:3,Image:"https://sdtimes.com/wp-content/uploads/2018/03/cpppp.png"},
    {title:"REACT",Stars:2,Image:"https://clipground.com/images/react-js-clipart-8.png"},
  ];
    return(
        <>
           <div>
             <div>
                <h1 className="flex justify-center items-center font-bold text-3xl text-black">TOP COURSES</h1>
             </div>
             <div className="flex justify-center items-center p-4 flex-wrap  w-[83%] m-auto gap-10">
              {CourseData.map((course,index)=>(
                <CourseCard key={index} title={course.title} Stars={course.Stars} Image={course.Image} />
              ))}
             </div>
           </div>
        </>
    )
}

export default Courses;