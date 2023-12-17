import EastIcon from "@mui/icons-material/East";
import {
   AnimatePresence,
   motion,
   useScroll,
   useTransform,
} from "framer-motion";
import { useRef, createRef, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SlickCarousel from "./component/carousel";
import {
   Card,
   CardHeader,
   CardBody,
   CardFooter,
   Image,
   Button,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import Spinner from "./component/spinner";
import Spinners from "./component/spinner";

const Home = () => {
   const refDiv = useRef(null);
   const refFavourite = useRef(null);
   const Router = useRouter();
   const { scrollYProgress } = useScroll({
      target: refDiv,
      offset: ["start end", "end end"],
   });
   const slidingLR = useTransform(scrollYProgress, [0, 0.5], ["200px", "0px"]);
   const slidingRL = useTransform(scrollYProgress, [0, 0.5], ["-200px", "0px"]);
   const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
   const [statusReload, setStatusReload] = useState(true);

   setTimeout(() => {
      setStatusReload(false);
   }, 1000);
   const lineRefs = useRef([]);

   const [DataPhoto, setDataPhoto] = useState([]);

   const arrayPict = [];

   lineRefs.current = arrayPict.map(
      (_, i) => lineRefs.current[i] ?? createRef()
   );

   useEffect(() => {
      const fetchDataPhoto = async () => {
         const DataObjectPhoto = await fetch("/api/dataPhoto");

         const res = await DataObjectPhoto.json();

         setDataPhoto(res.data);
      };

      fetchDataPhoto();
   }, []);

   console.log(DataPhoto);

   console.log(statusReload);

   return (
      <>
         <AnimatePresence>
            {statusReload ? <Spinners></Spinners> : ""}
         </AnimatePresence>
         <div className="pt-[60px]">
            <SlickCarousel />
         </div>
         <section className="container mx-auto mt-10 mb-10">
            <motion.div
               ref={refDiv}
               className="Header sm:text-[45px] text-[22px] w-full flex justify-center mb-5"
               initial={{ opacity: 0, translateY: "200px" }}
               animate={{ opacity: 1, translateY: 0 }}
               viewport={{ once: true }}
               whileInView={{ opacity: 1, translateY: 0 }}
               transition={{ delay: 1 }}
            >
               Glamoura's Taglines
            </motion.div>
            <motion.div
               className="body  sm:h-[450px] sm:grid grid-cols-3 gap-5  flex flex-col items-center"
               ref={refDiv}
            >
               <motion.div
                  className="flex flex-col items-center sm:mt-0 mt-4"
                  initial={{ opacity: 0, scale: 0.5 }} // Properti awal saat elemen dimuat
                  animate={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                     delay: 1,
                  }}
                  viewport={{ once: true }}
               >
                  <img
                     src="/assets/beauty.png"
                     className="sm:w-[150px] w-[80px]"
                  ></img>
                  <div className="mt-3 sm:text-[26px] text-[16px]  w-full text-center">
                     Esensial
                  </div>
               </motion.div>
               <motion.div
                  className="flex flex-col items-center sm:mt-0 mt-4"
                  initial={{ opacity: 0, scale: 0.5 }} // Properti awal saat elemen dimuat
                  animate={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                     delay: 1.25,
                  }}
                  viewport={{ once: true }}
               >
                  <img
                     src="/assets/makeup.png"
                     className="sm:w-[150px] w-[80px]"
                  ></img>
                  <div className="mt-3 sm:text-[26px] text-[16px]  w-full text-center">
                     Berkualitas
                  </div>
               </motion.div>
               <motion.div
                  className="flex flex-col items-center sm:mt-0 mt-4"
                  initial={{ opacity: 0, scale: 0.5 }} // Properti awal saat elemen dimuat
                  animate={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                     delay: 1.5,
                  }}
                  viewport={{ once: true }}
               >
                  <img
                     src="/assets/products.png"
                     className="sm:w-[150px] w-[80px]"
                  ></img>
                  <div className="mt-3 sm:text-[26px] text-[16px]  w-full text-center">
                     Trendi
                  </div>
               </motion.div>
            </motion.div>
         </section>
         <section className="Body p-10 bg-[#f4cb8e] " ref={refFavourite}>
            <div className="container mx-auto">
               <div className="sm:h-[600px]">
                  <motion.div
                     className="Header sm:text-[45px] text-[22px]"
                     initial={{ x: 300 }}
                     whileInView={{
                        x: 0,
                     }}
                     viewport={{ once: true }}
                  >
                     Our Favourites This Season
                  </motion.div>
                  <motion.div className="Body p-3 w-full sm:mt-10 mt-2">
                     <div className="sm:flex justify-between">
                        <motion.div
                           whileHover={{ translateY: "-10px" }}
                           initial={{ opacity: 0, translateY: "200px" }}
                           whileInView={{ opacity: 1, translateY: 0 }}
                           transition={{ delay: 0.5 }}
                           viewport={{ once: true }}
                           class="sm:mt-0 group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-[#ece6e6] shadow-md"
                        >
                           <a
                              class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                              href="#"
                           >
                              <img
                                 class="peer absolute top-0 right-0 h-full w-full object-cover"
                                 src="/assets/1.jpeg"
                                 alt="product image"
                              />
                              <img
                                 class="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
                                 src="/assets/2.jpeg"
                                 alt="product image"
                              />
                              <svg
                                 class="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-black transition-opacity"
                                 xmlns="http://www.w3.org/2000/svg"
                                 aria-hidden="true"
                                 role="img"
                                 width="1em"
                                 height="1em"
                                 preserveAspectRatio="xMidYMid meet"
                                 viewBox="0 0 32 32"
                              >
                                 <path
                                    fill="currentColor"
                                    d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
                                 />
                              </svg>
                           </a>
                           <div class="mt-4 px-5 pb-5">
                              <a href="#">
                                 <h5 class="text-xl tracking-tight text-black">
                                    Glamoura x56UF
                                 </h5>
                              </a>
                           </div>
                        </motion.div>
                        <motion.div
                           whileHover={{ translateY: "-10px" }}
                           initial={{ opacity: 0, translateY: "200px" }}
                           whileInView={{ opacity: 1, translateY: 0 }}
                           transition={{ delay: 0.75 }}
                           viewport={{ once: true }}
                           class="sm:mt-0 mt-3 group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-[#ece6e6] shadow-md"
                        >
                           <a
                              class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                              href="#"
                           >
                              <img
                                 class="peer absolute top-0 right-0 h-full w-full object-cover"
                                 src="/assets/4.jpeg"
                                 alt="product image"
                              />
                              <img
                                 class="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
                                 src="/assets/5.jpeg"
                                 alt="product image"
                              />
                              <svg
                                 class="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-black transition-opacity"
                                 xmlns="http://www.w3.org/2000/svg"
                                 aria-hidden="true"
                                 role="img"
                                 width="1em"
                                 height="1em"
                                 preserveAspectRatio="xMidYMid meet"
                                 viewBox="0 0 32 32"
                              >
                                 <path
                                    fill="currentColor"
                                    d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
                                 />
                              </svg>
                           </a>
                           <div class="mt-4 px-5 pb-5">
                              <a href="#">
                                 <h5 class="text-xl tracking-tight text-black">
                                    Glamoura x212UF
                                 </h5>
                              </a>
                           </div>
                        </motion.div>
                        <motion.div
                           whileHover={{ translateY: "-10px" }}
                           initial={{ opacity: 0, translateY: "200px" }}
                           whileInView={{ opacity: 1, translateY: 0 }}
                           transition={{ delay: 1 }}
                           viewport={{ once: true }}
                           class="sm:mt-0 mt-3 group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-[#ece6e6] shadow-md"
                        >
                           <a
                              class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                              href="#"
                           >
                              <img
                                 class="peer absolute top-0 right-0 h-[full] w-full object-cover"
                                 src="/assets/6.jpeg"
                                 alt="product image"
                              />
                              <img
                                 class="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
                                 src="/assets/7.jpeg"
                                 alt="product image"
                              />
                              <svg
                                 class="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-black transition-opacity"
                                 xmlns="http://www.w3.org/2000/svg"
                                 aria-hidden="true"
                                 role="img"
                                 width="1em"
                                 height="1em"
                                 preserveAspectRatio="xMidYMid meet"
                                 viewBox="0 0 32 32"
                              >
                                 <path
                                    fill="currentColor"
                                    d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
                                 />
                              </svg>
                           </a>
                           <div class="mt-4 px-5 pb-5">
                              <a href="#">
                                 <h5 class="text-xl tracking-tight text-black">
                                    Glamoura x876UF
                                 </h5>
                              </a>
                           </div>
                        </motion.div>
                     </div>
                  </motion.div>
               </div>
            </div>
            <div className="sm:mt-0 mt-3 h-[50px] flex justify-center">
               <motion.button
                  onClick={() => {
                     Router.push("/Product");
                  }}
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  viewport={{ once: true }}
                  className="bg-red-400 sm:w-[200px] w-[150px] rounded-[20px] sm:px-0  flex justify-evenly items-center "
               >
                  <div className="sm:text-[18px] text-[14px]">Show More</div>

                  <EastIcon></EastIcon>
               </motion.button>
            </div>
         </section>
         <section className="mt-10 WhyGlamoura container mx-auto sm:px-[100px] px-5 sm:mb-[100px]">
            <motion.div
               className="Header text-[45px] w-full flex justify-center mb-5"
               initial={{ opacity: 0, translateY: "200px" }}
               viewport={{ once: true }}
               whileInView={{ opacity: 1, translateY: 0 }}
               transition={{ delay: 0.5 }}
            >
               Why Glamoura
            </motion.div>

            <div className="Body">
               <motion.div
                  className="CardInformasi sm:grid sm:grid-cols-12 mb-5"
                  initial={{ opacity: 0, translateX: "200px" }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ delay: 1 }}
               >
                  <div className="col-span-10 sm:flex justify-between items-center gap-[50px] ">
                     <div>
                        <div className="Photo sm:w-[300px] h-[300px] ">
                           <img
                              src="/assets/Homeassets/riset.jpg"
                              className="object-cover w-full h-full rounded-xl"
                           ></img>
                        </div>
                     </div>
                     <div className="sm:w-[75%] w-full sm:mt-0 mt-2 text-justify">
                        Glamoura secara terus-menerus melakukan riset dan
                        pengembangan untuk menghadirkan inovasi terbaru dalam
                        produk skincare. Produk-produk kami didesain untuk
                        memenuhi kebutuhan unik setiap jenis kulit, menjadikan
                        kecantikan tidak hanya sebagai penampilan tetapi juga
                        sebagai perawatan yang mendalam.
                     </div>
                  </div>
                  <div className="col-span-2 "></div>
               </motion.div>
               <motion.div
                  className="CardInformasi grid grid-cols-12 mb-5"
                  initial={{ opacity: 0, translateX: "-200px" }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ delay: 1 }}
               >
                  <div className="sm:col-span-2 col-span-0"></div>
                  <div className="sm:col-span-10 col-span-12 sm:flex block justify-between items-center gap-[50px] ">
                     <div className="sm:w-[75%] text-justify sm:block hidden">
                        Glamoura memahami tanggung jawabnya terhadap lingkungan
                        dan terus berusaha menjadi perusahaan yang
                        berkelanjutan. Dengan memilih bahan-bahan ramah
                        lingkungan dan praktik produksi yang bertanggung jawab,
                        Glamoura berkomitmen untuk menjaga keindahan alam untuk
                        generasi mendatang.
                     </div>
                     <div>
                        <div className="Photo sm:w-[300px] h-[300px] ">
                           <img
                              src="/assets/Homeassets/ramahlingkungan.webp"
                              className="object-cover w-full h-full rounded-xl"
                           ></img>
                        </div>
                     </div>
                     <div className="sm:w-[75%] w-full sm:mt-0 mt-2 text-justify sm:hidden block">
                        Glamoura memahami tanggung jawabnya terhadap lingkungan
                        dan terus berusaha menjadi perusahaan yang
                        berkelanjutan. Dengan memilih bahan-bahan ramah
                        lingkungan dan praktik produksi yang bertanggung jawab,
                        Glamoura berkomitmen untuk menjaga keindahan alam untuk
                        generasi mendatang.
                     </div>
                  </div>
               </motion.div>
               <motion.div
                  className="CardInformasi grid grid-cols-12 mb-5"
                  ref={refDiv}
                  initial={{ opacity: 0, translateX: "200px" }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ delay: 1 }}
               >
                  <div className="sm:col-span-10 col-span-12 sm:flex block justify-between items-center gap-[50px] ">
                     <div>
                        <div className="Photo sm:w-[300px] sm:h-[300px] ">
                           <img
                              src="/assets/Homeassets/harga.jpg"
                              className="object-cover w-full h-full rounded-xl"
                           ></img>
                        </div>
                     </div>
                     <div className="sm:w-[75%] w-full text-justify sm:mt-0 mt-3">
                        Kecantikan harus dapat diakses oleh semua orang.
                        Glamoura mengusung prinsip harga terjangkau untuk
                        memastikan setiap individu memiliki kesempatan untuk
                        merasakan manfaat produk skincare berkualitas tanpa
                        harus menguras kantong.
                     </div>
                  </div>
                  <div className="sm:col-span-2 col-span-0 "></div>
               </motion.div>
            </div>
         </section>
         <section className="sm:px-0 px-5 InformationNews container mx-auto sm:mb-[100px] mb-5 mt-[60px]">
            <div className="Header sm:text-[45px] text-[22px] w-full sm:mb-5 mb-3">
               News Information
            </div>

            <motion.div
               className="sm:grid sm:grid-cols-3 flex flex-col gap-5"
               ref={refDiv}
            >
               <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="https://www.liputan6.com/health/read/5476801/pakar-estetika-medis-asal-korea-bagikan-teknik-untuk-ciptakan-kontur-wajah-yang-seimbango"
                  style={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0.5, translateY: "200px" }} // Properti awal saat elemen dimuat
                  animate={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                  transition={{
                     delay: 1 * 0.09,
                  }}
                  viewport={{ once: true }}
               >
                  <Card className="sm:h-[300px] h-[150px] rounded-lg cursor-pointer">
                     <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                           Kecantikan
                        </p>
                        <h4 className="text-white font-medium text-large">
                           Pakar Estetika Medis Asal Korea Bagikan Teknik untuk
                           Ciptakan Kontur Wajah yang Seimbang
                        </h4>
                     </CardHeader>
                     <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://cdn0-production-images-kly.akamaized.net/Ut5FF_lOQRjVyhpr0RqJOpnPwzo=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4680072/original/039482400_1702116669-FOTO_2.jpeg"
                     />
                  </Card>
               </motion.a>

               <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="https://www.liputan6.com/health/read/5464289/akhir-pekan-saatnya-berburu-produk-beauty-di-beautitastic"
                  style={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0.5, translateY: "200px" }} // Properti awal saat elemen dimuat
                  animate={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                  transition={{
                     delay: 2 * 0.09,
                  }}
                  viewport={{ once: true }}
               >
                  <Card className=" sm:h-[300px] h-[150px] rounded-lg">
                     <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                           Info Kesehatan
                        </p>
                        <h4 className="text-white font-medium text-large">
                           Akhir Pekan, Saatnya Berburu Produk Beauty di
                           Beautitastic
                        </h4>
                     </CardHeader>
                     <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://cdn1-production-images-kly.akamaized.net/y4gEU9ut_I-ruGczmroKPokHu1w=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4662666/original/061931800_1700852622-WhatsApp_Image_2023-11-25_at_01.01.08.jpeg"
                     />
                  </Card>
               </motion.a>
               <motion.a
                  href="https://www.liputan6.com/citizen6/read/5430823/ini-perawatan-kulit-tubuh-rambut-dan-estetika-ala-sultan"
                  whileHover={{ scale: 1.02 }}
                  style={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0.5, translateY: "200px" }} // Properti awal saat elemen dimuat
                  animate={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                  transition={{
                     delay: 3 * 0.09,
                  }}
                  viewport={{ once: true }}
               >
                  <Card className=" sm:h-[300px] h-[150px] rounded-lg">
                     <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                           Tutorial
                        </p>
                        <h4 className="text-white font-medium text-large">
                           Cara wajah tetap mulus dan glowing
                        </h4>
                     </CardHeader>
                     <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://cdn1-production-images-kly.akamaized.net/krCcDe3rR919VIHb1h1LF_sNT_U=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4620848/original/019857400_1698052757-face_treatment.jpg"
                     />
                  </Card>
               </motion.a>
            </motion.div>
         </section>
      </>
   );
};

export default Home;
