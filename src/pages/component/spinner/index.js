import { Spinner } from "@nextui-org/react";
import { motion } from "framer-motion";

const Spinners = () => {
   return (
      <motion.div
         className="fixed w-full h-screen bg-[#f3eee8] z-[10000] top-0 flex justify-center items-center"
         exit={{
            opacity: 0,
            transition: {
               duration: 1,
               ease: "easeInOut",
               loop: Infinity,
               repeatDelay: 2,
            },
         }}
      >
         <motion.img
            src="/assets/logo.jpeg"
            initial={{ width: "200px", opacity: 0 }}
            animate={{
               width: "280px",
               opacity: 1,
               transition: {
                  duration: 1,
                  ease: "easeInOut",
                  loop: Infinity,
                  repeatDelay: 2,
               },
            }}
         ></motion.img>
      </motion.div>
   );
};

export default Spinners;
