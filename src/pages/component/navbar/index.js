import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from 'hamburger-react'


const Navbar = () => {
   const routes = useRouter();
   const [statusMobileNav, setStatusMobileNav] = useState(false);

   useEffect(() => {
      setStatusMobileNav(false);
   }, [routes]);

   return (
      <>
         <div className="fixed w-full z-[1000] px-[7.2%] bg-[#f4cb8e] h-[60px]">
            <div className="Content flex justify-between items-center h-full">
               <div
                  className="Logo cursor-pointer"
                  onClick={() => routes.push("/")}
               >
                  <img src="/assets/perusahaan/logo.png" className="sm:w-[100px] w-[80px] bg-transparent"></img>
               </div>
               <div className="MainContent sm:flex hidden justify-evenly w-[50%] cursor-pointer">
                  <div
                     onClick={() => routes.push("/")}
                     className={`${
                        routes.route == "/" ? "font-bold text-[#F87171]" : ""
                     } `}
                  >
                     Home
                  </div>
                  <div
                     onClick={() => {
                        console.log("test");
                        routes.push("/Product");
                     }}
                     className={`${
                        routes.route == "/Product"
                           ? "font-bold text-[#F87171]"
                           : ""
                     }`}
                  >
                     Product
                  </div>
                  <div
                     onClick={() => {
                        routes.push("/AboutUs");
                     }}
                     className={`${
                        routes.route == "/AboutUs"
                           ? "font-bold text-[#F87171]"
                           : ""
                     }`}
                  >
                     About Us
                  </div>
                  <div
                     onClick={() => {
                        routes.push("/Contact");
                     }}
                     className={`${
                        routes.route == "/Contact"
                           ? "font-bold text-[#F87171]"
                           : ""
                     }`}
                  >
                     Contact
                  </div>
               </div>
               <div></div>
               <div
                  className="sm:hidden block"
                  onClick={() => setStatusMobileNav(true)}
               >
                  <img src="/assets/hamburger.png" className="w-[30px] cursor-pointer"></img>
               </div>
            </div>
         </div>
         <AnimatePresence>
            {statusMobileNav == true ? (
               <div className="fixed  w-screen h-screen z-[99999]">
                  <motion.div
                     className="body flex justify-center items-center bg-orange-200 h-full"
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: "100%", opacity: 1 }}
                     exit={{ opacity: 0 }}
                  >
                     <div className="MainContent cursor-pointer h-[300px]  w-full">
                        <motion.div
                           className="px-10 flex w-full justify-end "
                           onClick={() => setStatusMobileNav(false)}
                        >
                           X
                        </motion.div>
                        <div className="body-content text-center h-full  flex flex-col justify-evenly">
                           <div
                              onClick={() => {
                                 routes.push("/");
                              }}
                              className={`${
                                 routes.route == "/"
                                    ? "font-bold text-[#F87171]"
                                    : ""
                              } `}
                           >
                              Home
                           </div>
                           <div
                              onClick={() => {
                                 routes.push("/Product");
                              }}
                              className={`${
                                 routes.route == "/Product"
                                    ? "font-bold text-[#F87171]"
                                    : ""
                              }`}
                           >
                              Product
                           </div>
                           <div
                              onClick={() => {
                                 routes.push("/AboutUs");
                              }}
                              className={`${
                                 routes.route == "/AboutUs"
                                    ? "font-bold text-[#F87171]"
                                    : ""
                              }`}
                           >
                              About Us
                           </div>
                           <div
                              onClick={() => {
                                 routes.push("/Contact");
                              }}
                              className={`${
                                 routes.route == "/Contact"
                                    ? "font-bold text-[#F87171]"
                                    : ""
                              }`}
                           >
                              Contact
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>
            ) : (
               ""
            )}
         </AnimatePresence>
      </>
   );
};

export default Navbar;
