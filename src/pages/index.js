import EastIcon from "@mui/icons-material/East";
import {
   AnimatePresence,
   motion,
   useScroll,
   useTransform,
} from "framer-motion";
import CardPhotoGlamour from "./component/content/cardWhy";
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
   const Router = useRouter();
   const { scrollYProgress } = useScroll({
      target: refDiv,
      offset: ["start end", "end end"],
   });
   const slidingLR = useTransform(scrollYProgress, [0, 0.5], ["900px", "0px"]);
   const slidingRL = useTransform(scrollYProgress, [0, 0.5], ["-900px", "0px"]);
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
            <div className="Header text-[45px] w-full flex justify-center mb-5">
               Glamoura's Taglines
            </div>
            <motion.div
               className="body  h-[450px] grid grid-cols-3 gap-5  flex items-center"
               ref={refDiv}
               style={{ scale: 1.1 }}
               initial={{ opacity: 0, scale: 0.5 }} // Properti awal saat elemen dimuat
               animate={{ opacity: 1, scale: 1 }}
            >
               <div className="flex flex-col items-center ">
                  <img src="/assets/beauty.png" width={150}></img>
                  <div className="mt-3 text-[26px]  w-full text-center">
                     Esensial
                  </div>
               </div>
               <div className="flex flex-col items-center">
                  <img src="/assets/makeup.png" width={150}></img>
                  <div className="mt-3 text-[26px]  w-full text-center">
                     Berkualitas
                  </div>
               </div>
               <div className="flex flex-col items-center">
                  <img src="/assets/products.png" width={150}></img>
                  <div className="mt-3 text-[26px]  w-full text-center">
                     Trendi
                  </div>
               </div>
            </motion.div>
         </section>
         <section className="Body p-10 bg-[#f4cb8e] ">
            <div className="container mx-auto">
               <div className="h-[600px]">
                  <div className="Header text-[45px]">
                     Our Favourites This Season
                  </div>
                  <div className="Body p-3 w-full mt-10">
                     <div className="flex justify-between">
                        <motion.div
                           whileHover={{ translateY: "-10px" }}
                           class="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-[#ece6e6] shadow-md"
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
                           class="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-[#ece6e6] shadow-md"
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
                                    Glamoura x212UF
                                 </h5>
                              </a>
                           </div>
                        </motion.div>
                        <motion.div
                           whileHover={{ translateY: "-10px" }}
                           class="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-[#ece6e6] shadow-md"
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
                                    Glamoura x876UF
                                 </h5>
                              </a>
                           </div>
                        </motion.div>

                        {/* {DataPhoto.map((el, index) => {
                           return (
                              <CardPhotoGlamour
                                 propsData={el}
                                 idx={index}
                              ></CardPhotoGlamour>
                           );
                        })} */}
                     </div>
                  </div>
               </div>
            </div>
            <div className=" h-[50px] flex justify-center">
               <motion.button
                  onClick={() => {
                     Router.push("/Product");
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-red-400 w-[200px] rounded-[80px] flex justify-evenly items-center "
               >
                  <div>Show More</div>

                  <EastIcon></EastIcon>
               </motion.button>
            </div>
         </section>
         <section className="mt-10 WhyGlamoura container mx-auto px-[100px] mb-[100px]">
            <div className="Header text-[45px] w-full flex justify-center mb-5">
               Why Glamoura
            </div>

            <div className="Body">
               <motion.div
                  className="CardInformasi grid grid-cols-12 mb-5 "
                  ref={refDiv}
                  style={{ translateX: slidingRL, opacity: opacity }}
               >
                  <div className="col-span-10 flex justify-between items-center gap-[50px] ">
                     <div>
                        <div className="Photo w-[300px] h-[300px] ">
                           <img
                              src="/assets/5.jpeg"
                              className="object-cover w-full h-full rounded-xl"
                           ></img>
                        </div>
                     </div>
                     <div className="w-[75%] text-justify">
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
                  ref={refDiv}
                  style={{ translateX: slidingLR, opacity: opacity }}
               >
                  <div className="col-span-2 "></div>
                  <div className="col-span-10 flex justify-between items-center gap-[50px] ">
                     <div className="w-[75%] text-justify">
                        Glamoura memahami tanggung jawabnya terhadap lingkungan
                        dan terus berusaha menjadi perusahaan yang
                        berkelanjutan. Dengan memilih bahan-bahan ramah
                        lingkungan dan praktik produksi yang bertanggung jawab,
                        Glamoura berkomitmen untuk menjaga keindahan alam untuk
                        generasi mendatang.
                     </div>
                     <div>
                        <div className="Photo w-[300px] h-[300px] ">
                           <img
                              src="/assets/5.jpeg"
                              className="object-cover w-full h-full rounded-xl"
                           ></img>
                        </div>
                     </div>
                  </div>
               </motion.div>
               <motion.div
                  className="CardInformasi grid grid-cols-12 mb-5"
                  ref={refDiv}
                  style={{ translateX: slidingRL, opacity: opacity }}
               >
                  <div className="col-span-10 flex justify-between items-center gap-[50px] ">
                     <div>
                        <div className="Photo w-[300px] h-[300px] ">
                           <img
                              src="/assets/5.jpeg"
                              className="object-cover w-full h-full rounded-xl"
                           ></img>
                        </div>
                     </div>
                     <div className="w-[75%] text-justify">
                        Kecantikan harus dapat diakses oleh semua orang.
                        Glamoura mengusung prinsip harga terjangkau untuk
                        memastikan setiap individu memiliki kesempatan untuk
                        merasakan manfaat produk skincare berkualitas tanpa
                        harus menguras kantong.
                     </div>
                  </div>
                  <div className="col-span-2 "></div>
               </motion.div>
            </div>
         </section>
         <section className="InformationNews container mx-auto mb-[100px] mt-[60px]">
            <div className="Header text-[45px] w-full mb-5">
               News Information
            </div>

            <div className="grid grid-cols-3 gap-5">
               <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="https://www.liputan6.com/health/read/5476801/pakar-estetika-medis-asal-korea-bagikan-teknik-untuk-ciptakan-kontur-wajah-yang-seimbango"
               >
                  <Card className=" h-[300px] rounded-lg cursor-pointer">
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
               >
                  <Card className=" h-[300px] rounded-lg">
                     <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                           Health Info
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
               >
                  <Card className=" h-[300px] rounded-lg">
                     <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                           Supercharged
                        </p>
                        <h4 className="text-white font-medium text-large">
                           Creates beauty like a beast
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
            </div>
         </section>
      </>
   );
};

export default Home;
