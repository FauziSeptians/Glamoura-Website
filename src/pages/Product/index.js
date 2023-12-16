import Spinners from "../component/spinner";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Product = () => {
   const [statusReload, setStatusReload] = useState(true);

   setTimeout(() => {
      setStatusReload(false);
   }, 1000);
   return (
      <>
         <AnimatePresence>
            {statusReload ? <Spinners></Spinners> : ""}
         </AnimatePresence>
         <div className="pt-[60px] sm:h-[550px] h-[200px] bg-red-100 ">  <img
                     src="/assets/banner1.webp"
                     className="w-full h-full object-cover"
                  ></img></div>
         <section className="sm:px-0 px-3 container mx-auto mt-5">
            <div className="Header sm:text-[45px] text-[22px] w-full flex justify-start mb-5">
               Favourites Product
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-2 bodyContent gap-3">
               <div className="">
                  <img
                     src="/assets/5.jpeg"
                     className="object-cover w-full h-full rounded-xl"
                  ></img>
               </div>
               <div className="">
                  <img
                     src="/assets/5.jpeg"
                     className="object-cover w-full h-full rounded-xl"
                  ></img>
               </div>
               <div className="hidden sm:block">
                  <img
                     src="/assets/5.jpeg"
                     className="object-cover w-full h-full rounded-xl"
                  ></img>
               </div>
            </div>
         </section>
         <section className="container mx-auto mt-5 mb-5">
            <div className="Header sm:text-[45px] text-[22px] w-full flex justify-center mb-5">
               Latest Product
            </div>
            <div className="sm:px-0 px-3 bodyContent">
               <div className="bg-red-100 sm:h-[400px] h-[200px]"></div>
               <div className="mt-3 text-center">
                  <div className="sm:text-[30px] text-[20px] font-semibold space-x-2">
                     NEW GLAMOURA 76UF
                  </div>
                  <div className="mt-2 bg-red-100 sm:px-[20%] sm:text-[18px] text-[14px]">
                     Temukan keajaiban kecantikan dalam New Glamoura 76UF yang
                     diperkaya dengan formula inovatif dan bahan-bahan pilihan,
                     untuk mencerahkan kulit anda.
                  </div>
               </div>
            </div>
         </section>
         <section className="sm:px-0 px-3 container mx-auto mt-5 mb-10">
            <div className="Header sm:text-[45px] text-[22px] w-full flex justify-start mb-5">
               Other Products
            </div>
            <div className="grid sm:grid-cols-4 grid-cols-2 bodyContent gap-3">
               <div className="">
                  <img
                     src="/assets/5.jpeg"
                     className="object-cover w-full h-full rounded-xl"
                  ></img>
               </div>
               <div className="">
                  <img
                     src="/assets/5.jpeg"
                     className="object-cover w-full h-full rounded-xl"
                  ></img>
               </div>
               <div className="">
                  <img
                     src="/assets/5.jpeg"
                     className="object-cover w-full h-full rounded-xl"
                  ></img>
               </div>
               <div className="">
                  <img
                     src="/assets/5.jpeg"
                     className="object-cover w-full h-full rounded-xl"
                  ></img>
               </div>
            </div>
         </section>
      </>
   );
};

export default Product;
