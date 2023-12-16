import {motion} from "framer-motion"
const Footer = () => {
   return (
      <div className="px-[7.2%] bg-orange-200 sm:h-[400px] sm:p-0 p-3">
         <div className="Content  flex justify-center items-center h-full ">
            <div className="px-[10%] text-center">
               <div className="Header text-[25px] mb-3">GLAMOURA COSMETIC BRAND</div>
               <div className="sm:text-[18px] text-[14px] sm:text-center text-justify">
                  Glamoura adalah perusahaan yang bergerak di bidang kecantikan khususnya
                  skincare. Kami fokus pada pengembangan, produksi, dan
                  pemasaran produk perawatan kulit yang terbaik untuk mencapai
                  kulit sehat dan bercahaya.

                  Glamoura memiliki visi Menjadi pilihan utama dan solusi kecantikan terpercaya di hati setiap individu, dengan memberikan produk skincare terbaik untuk segala jenis kulit di Indonesia.
               </div>
               <div className="mt-10 flex justify-center sm:gap-[5%] gap-[13%]">
                  <motion.img src="/assets/footerAssets/twitter.png" width={30} whileHover={{scale: 1.1}} className="cursor-pointer"></motion.img>
                  <motion.img src="/assets/footerAssets/gmail.png" width={30} whileHover={{scale: 1.1}} className="cursor-pointer"></motion.img>
                  <motion.img src="/assets/footerAssets/whatsapp.png" width={30} whileHover={{scale: 1.1}} className="cursor-pointer"></motion.img>
                  <motion.img src="/assets/footerAssets/youtube.png" width={30} whileHover={{scale: 1.1}} className="cursor-pointer"></motion.img>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
