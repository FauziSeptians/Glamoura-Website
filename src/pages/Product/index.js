import Spinners from "../component/spinner";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Product = () => {
   const [statusReload, setStatusReload] = useState(true);
   const refDiv = useRef(null);

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
         <section className="sm:px-0 px-3 container mx-auto mt-5" ref={refDiv}>
            <motion.div
               className="Header sm:text-[45px] text-[22px] w-full flex justify-start mb-5"
               initial={{ opacity: 0, translateY: "200px" }}
               whileInView={{ opacity: 1, translateY: 0 }}
               transition={{ delay: 1 }}
               viewport={{ once: true }}
            >
               Favourites Product
            </motion.div>
            <div className="grid sm:grid-cols-3 grid-cols-2 bodyContent gap-3">
               <motion.div
                  className="sm:block hidden"
      
               >
                  <img
                     src="/assets/1.jpeg"
                     className="object-cover w-full h-full rounded-xl"
                  ></img>
               </motion.div>
               <motion.div
                  className=""
               >
                  <img
                     src="/assets/6.jpeg"
                     className="object-cover w-full h-full rounded-xl"
                  ></img>
               </motion.div>
               <motion.div
                  className=""

               >
                  <img
                     src="/assets/4.jpeg"
                     className="object-cover w-full h-full rounded-xl"
                  ></img>
               </motion.div>
            </div>
         </section>
         <section className="container mx-auto mt-5 mb-5">
            <motion.div
               className="Header sm:text-[45px] text-[22px] w-full flex justify-center mb-5"
               initial={{ opacity: 0, translateY: "200px" }}
               viewport={{ once: true }}
               whileInView={{ opacity: 1, translateY: 0 }}
               transition={{ delay: 0.5 }}
            >
               Latest Product
            </motion.div>
            <div className="sm:px-0 px-3 bodyContent">
               <motion.div
                  className=" sm:h-[700px] h-[200px] rounded-3xl"
                  initial={{ opacity: 0, translateY: "200px" }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{ delay: 1 }}
               >
                  {/* <video autoPlay muted loop>
                     <source src="/assets/GLAMOURA.mp4" />
                  </video> */}
                  <video
                     src="/assets/GLAMOURA.mp4"
                     autoPlay={true}
                     controls={true}
                     muted={true}
                     loop={true}
                     className="object-cover w-full h-full rounded-3xl"
                  ></video>
               </motion.div>
               <motion.div
                  className="mt-4 text-center"
                  initial={{ opacity: 0, translateY: "200px" }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{ delay: 1.25 }}
               >
                  <div className="sm:text-[30px] text-[20px] font-semibold space-x-2">
                     NEW GLAMOURA 76UF
                  </div>
                  <div className="mt-2 sm:px-[20%] sm:text-[18px] text-[14px]">
                     Temukan keajaiban kecantikan dalam New Glamoura 76UF yang
                     diperkaya dengan formula inovatif dan bahan-bahan pilihan,
                     untuk mencerahkan kulit anda.
                  </div>
               </motion.div>
            </div>
         </section>
         <section className="sm:px-0 px-3 container mx-auto mt-5 mb-10">
            <motion.div
               className="Header sm:text-[45px] text-[22px] w-full flex justify-start mb-5"
               initial={{ opacity: 0, translateX: "200px" }}
               viewport={{ once: true }}
               whileInView={{ opacity: 1, translateX: 0 }}
               transition={{ delay: 1 }}
            >
               Other Products
            </motion.div>
            <div className="grid sm:grid-cols-4 grid-cols-2 bodyContent gap-3">
               <motion.div
                  className=""
                  initial={{ opacity: 0, translateY: "200px" }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{ delay: 1 }}
               >
                  <img
                     src="/assets/1.jpeg"
                     className="object-cover w-full h-full rounded-xl"
                  ></img>
               </motion.div>
               <motion.div
                  className=""
                  initial={{ opacity: 0, translateY: "200px" }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{ delay: 1.25 }}
               >
                  <img
                     src="/assets/4.jpeg"
                     className="object-cover w-full h-full rounded-xl"
                  ></img>
               </motion.div>
               <motion.div
                  className=""
                  initial={{ opacity: 0, translateY: "200px" }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{ delay: 1.5 }}
               >
                  <img
                     src="/assets/6.jpeg"
                     className="object-cover w-full h-full rounded-xl"
                  ></img>
               </motion.div>
               <motion.div
                  className=""
                  initial={{ opacity: 0, translateY: "200px" }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{ delay: 1.75 }}
               >
                  <img
                     src="/assets/7.jpeg"
                     className="object-cover w-full h-full rounded-xl"
                  ></img>
               </motion.div>
            </div>
         </section>
      </>
   );
};

export default Product;
