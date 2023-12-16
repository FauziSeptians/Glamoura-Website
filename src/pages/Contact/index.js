import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Spinners from "../component/spinner";

const Contact = () => {
   const [statusReload, setStatusReload] = useState(true);

   setTimeout(() => {
      setStatusReload(false);
   }, 1000);
   return (
      <>
         <AnimatePresence>
            {statusReload ? <Spinners></Spinners> : ""}
         </AnimatePresence>
         <div className="pt-[60px] sm:h-[550px] h-[200px] bg-red-100 ">
            {" "}
            <img
               src="/assets/banner1.webp"
               className="w-full h-full object-cover"
            ></img>
         </div>
         <section className="container mx-auto  mt-10 mb-10 flex justify-center items-center">
            <div className="Form rounded-lg p-3 sm:w-[50%] text-center">
               <div className="Header text-[35px] mb-2">Contact Us</div>
               <div className="mt-3 relative h-[40px] bg-red-100">
                  <input
                     className="Nama w-full h-full rounded p-2"
                     placeholder="Nama"
                  ></input>
               </div>
               <div className="mt-3 relative h-[40px] bg-red-100">
                  <input
                     className="Nama w-full h-full rounded p-2"
                     placeholder="Email"
                  ></input>
               </div>
               <div className="mt-3">
                  <textarea
                     className="textarea w-full h-[80px] rounded min-h-[200px] p-2"
                     placeholder="Message"
                  ></textarea>
               </div>
               <div className="mt-3">
                  <motion.div
                     className="p-3 bg-orange-200 rounded cursor-pointer"
                     whileHover={{
                        backgroundColor: "transparent",
                        color: "black",
                        border: "1px solid black",
                     }}
                  >
                     Send message
                  </motion.div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Contact;
