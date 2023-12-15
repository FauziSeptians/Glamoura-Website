import { Opacity } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";


const CardPhotoGlamour = ({ propsData, idx }) => {
   console.log(propsData);
   const [statusHover, setStatusHover] = useState(false);
   return (
      <motion.div
         className={`h-[400px] w-[22%]   relative cursor-pointer`}
         onMouseEnter={() => setStatusHover(true)}
         onMouseLeave={() => setStatusHover(false)}
         animate={{ opacity: 1, translateY: "0px" }}
         initial={{ opacity: 0, translateY: "200px", }}
         whileHover={{translateY: -10}}
         transition={{ delay: 0.3 * idx }}
      >
         <img
            src={`/assets/${propsData.photoImage}`}
            className="object-cover w-full h-full rounded-xl"
         ></img>
         {statusHover && (
            <motion.div
               className="absolute top-0 bg-[rgb(248,113,113,0.1)] w-full h-full flex items-end p-5"
               initial={{ Opacity: 0 }}
               animate={{ Opacity: 1 }}
               transition={{ ease: "easeOut", duration: 2 }}
            >
               <motion.div
                  className=""
                  initial={{ opacity: 0, translateY: "20px" }}
                  animate={{ opacity: 1, translateY: "0px" }}
                  transition={{ ease: "easeOut", duration: 1 }}
               >
                  <div className="Headers text-[24px] ">
                     {propsData.headerText}
                  </div>
                  <div className="text-justify font-thin">
                     {propsData.DescriptionText}
                  </div>
               </motion.div>
            </motion.div>
         )}
      </motion.div>
   );
};

export default CardPhotoGlamour;
