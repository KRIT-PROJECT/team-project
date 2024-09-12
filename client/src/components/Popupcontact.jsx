import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";

const Popupcontact = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 20) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 90 },
        hidden: { y: "0" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="sticky top-0 z-40 flex justify-center w-full"
    >
      <div className="w-[90%] x-sm:w-[95%] sm:w-auto sm:min-w-[300px] bg-gradient-to-r from-[#292E49] to-[#536976] text-white rounded-full shadow-lg p-3 px-4 flex sm:flex-row justify-between x-sm:justify-around x-sm:items-center items-center space-y-3 sm:space-y-0 sm:space-x-6 text-center sm:text-left ">
        <h1 className="flex items-center text-lg font-semibold x-sm:hidden sm:flex">
          Contact:-
        </h1>
        <p className="flex items-center gap-2 text-sm x-sm:text-xs sm:text-base">
          <MdOutlinePhoneInTalk className="text-xl" />
          +91 123456789
        </p>
        <p className="flex items-center gap-2 text-sm x-sm:text-xs sm:text-base">
          <MdOutlineMailOutline className="text-xl" />
          <a href="mailto:21pa1a1289@vishnu.edu.in" className="hover:underline">
            21pa1a1289@vishnu.edu.in
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default Popupcontact;
