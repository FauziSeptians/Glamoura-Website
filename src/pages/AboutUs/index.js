import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import Spinners from "../component/spinner";

const About = () => {
   const [statusShowsection, setStatusSection] = useState(false);
   const route = useRouter();
   function ShowSection() {
      setStatusSection(true);
      route.push("#visimisi");
   }
   const [statusReload, setStatusReload] = useState(true);

   function MailClick(){
      window.location.href="mailto:chelseahoban160@gmail.com"
   }

   function TelpClick(){
      window.open("https://api.whatsapp.com/send?phone=6282114253870&text=Hallo,Permisi saya tertarik dengan product Glamoura anda", '_blank');
   }

   setTimeout(() => {
      setStatusReload(false);
   }, 1000);
   return (
      <>
         <AnimatePresence>
            {statusReload ? <Spinners></Spinners> : ""}
         </AnimatePresence>
         <section className="w-full h-screen relative">
            <img
               src="assets/perusahaan/perusahaan.jpg"
               className="object-cover w-full h-full opacity-30"
            ></img>
            <div className="absolute  top-0 w-full h-full flex flex-col justify-center items-center ">
               <div className="Header sm:text-[70px] text-[40px] tracking-widest ">
                  GLAMOURA
               </div>
               <div className="sm:mx-[25%] mx-[10%] text-center sm:font-medium font-normal tracking-wider sm:text-[18px] text-[14px]">
                  perusahaan yang bergerak di bidang kecantikan khususnya
                  skincare. Kami fokus pada pengembangan, produksi, dan
                  pemasaran produk perawatan kulit yang terbaik untuk mencapai
                  kulit sehat dan bercahaya
               </div>
               <div className="mt-[7%] text-center">
                  <div className="text-center font-medium mb-3 sm:text-[18px] text-[16px]">
                     Visi & Misi
                  </div>
                  <div>
                     <motion.button
                        className="w-[50px] h-[50px] bg-orange-200 rounded-[100%]"
                        whileHover={{ scale: 1.1 }}
                        onClick={() => ShowSection()}
                     >
                        {">"}
                     </motion.button>
                  </div>
               </div>
            </div>
         </section>
         {statusShowsection && (
            <>
               <motion.section
                  id="visimisi"
                  className="mt-10 container mx-auto mb-10"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "100%" }}
               >
                  <div className="Header sm:text-[45px] text[22px] text-center mb-5">
                     Visi & Misi
                  </div>
                  <div className="sm:px-0 px-3 sm:grid sm:grid-cols-12 gap-5 mt-3 sm:text-[18px] text-[16px]">
                     <div className="col-span-5 bg-red-100">
                        <img
                           src="/assets/perusahaan/perusahaan2.jpg"
                           className="object-cover w-full h-full rounded-xl"
                        ></img>
                     </div>
                     <div className="col-span-7  flex items-center text-justify">
                        <div>
                           <div className="mb-5 sm:mt-0 mt-3">
                              <div className="font-medium text-[20px] mb-2">
                                 Visi Perusahaan:
                              </div>
                              <div>
                                 Menjadi pilihan utama dan solusi kecantikan
                                 terpercaya di hati setiap individu, dengan
                                 memberikan produk skincare terbaik untuk segala
                                 jenis kulit di Indonesia.
                              </div>
                           </div>
                           <div clas>
                              <div className="font-medium text-[20px] mb-2">
                                 Misi Perusahaan:
                              </div>
                              <div>
                                 1. Menghadirkan produk skincare inovatif dan
                                 berkualitas tinggi yang dapat memenuhi
                                 kebutuhan perawatan kulit pelanggan.
                              </div>
                              2. Memberikan pengalaman kecantikan yang unik dan
                              memuaskan, meningkatkan kepercayaan diri setiap
                              individu.
                              <div>
                                 3. Menjaga komitmen terhadap keberlanjutan
                                 lingkungan dengan memprioritaskan bahan-bahan
                                 ramah lingkungan dan praktik produksi yang
                                 bertanggung jawab.{" "}
                              </div>
                              <div>
                                 4. Menawarkan harga yang terjangkau agar
                                 kecantikan dapat diakses oleh semua lapisan
                                 masyarakat.
                              </div>
                              <div>
                                 5. Terus melakukan inovasi, riset, dan
                                 pengembangan untuk memastikan produk selalu
                                 sesuai dengan perkembangan terkini dalam
                                 industri kecantikan.
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.section>
               <section className="sm:px-0 px-3 container mx-auto mb-10">
                  <div className="Header sm:text-[45px] text-[20px] text-start mb-3">
                     Gallery Perusahaan
                  </div>
                  <div className="sm:grid sm:grid-cols-4 flex flex-col gap-4">
                     <div className="grid grid-rows-2 gap-3">
                        <img
                           src="/assets/perusahaan/gallery1.jpg"
                           className="object-cover w-full sm:h-full h-[200px] rounded-xl"
                        ></img>
                        <img
                           src="/assets/perusahaan/gallery2.webp"
                           className="object-cover w-full sm:h-full h-[200px] rounded-xl"
                        ></img>
                     </div>

                     <div>
                        <img
                           src="/assets/perusahaan/gallery4.jpg"
                           className="object-cover w-full sm:h-full h-[200px] rounded-xl"
                        ></img>
                     </div>
                     <div className="grid grid-rows-3 gap-3">
                        <img
                           src="/assets/perusahaan/gallery5.webp"
                           className="object-cover w-full sm:h-full h-[200px] rounded-xl"
                        ></img>
                        <img
                           src="/assets/perusahaan/gallery6.webp"
                           className="object-cover w-full sm:h-full h-[200px] rounded-xl"
                        ></img>
                        <img
                           src="/assets/perusahaan/gallery7.png"
                           className="object-cover w-full sm:h-full h-[200px] rounded-xl"
                        ></img>
                     </div>
                     <div>
                        <img
                           src="/assets/perusahaan/gallery8.webp"
                           className="object-cover w-full sm:h-full h-[200px] rounded-xl"
                        ></img>
                     </div>
                  </div>
                  <div></div>
               </section>
               <motion.section
                  id="visimisi"
                  className="mt-10 container mx-auto mb-10"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "100%" }}
               >
                  <div className="Header sm:text-[45px] text[22px] text-center mb-5">
                     Contact Information
                  </div>
                  <div className="sm:px-0 px-3 sm:grid sm:grid-cols-12 gap-5 mt-3 sm:text-[18px] text-[16px]">
                     <div className="col-span-5 bg-red-100">
                        <img
                           src="/assets/perusahaan/perusahaan2.jpg"
                           className="object-cover w-full h-full rounded-xl"
                        ></img>
                     </div>
                     <div className="col-span-7  flex items-center text-justify">
                        <div>
                           <div className="mb-5 sm:mt-0 mt-3">
                              <div className="font-medium text-[20px] mb-2">
                                 Contact Perusahaan
                              </div>
                              <div className="flex flex-col gap-4 mt-3">
                                 <div className="flex items-center gap-3">
                                    <motion.img
                                       src="/assets/footerAssets/gmail.png"
                                       width={40}
                                       whileHover={{ scale: 1.1 }}
                                       className="cursor-pointer"
                                       onClick={() => MailClick()}
                                    ></motion.img>
                                    <motion.div whileHover={{color: "#F87171"}} className="cursor-pointer" onClick={() => MailClick()}>chelseahoban160@gmail.com</motion.div>
                                 </div>
                                 <div className="flex items-center gap-3">
                                    <motion.img
                                       src="/assets/footerAssets/whatsapp.png"
                                       width={40}
                                       whileHover={{ scale: 1.1 }}
                                       className="cursor-pointer"
                                       onClick={() => TelpClick()}
                                    ></motion.img>
                                    <motion.div whileHover={{color: "#F87171"}} className="cursor-pointer" onClick={() => TelpClick()}>082114253870</motion.div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.section>
            </>
         )}
      </>
   );
};

export default About;
