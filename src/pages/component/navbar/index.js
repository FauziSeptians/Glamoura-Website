import { useRouter } from "next/router";


const Navbar = () => {

   const routes = useRouter();

   console.log(routes);


   return (
      <div className="fixed w-full z-[1000] px-[7.2%] bg-[#f4cb8e] h-[60px]">
         <div className="Content flex justify-between items-center h-full">
            <div className="Logo w-ful bg-amber-950">logo</div>
            <div className="MainContent flex justify-evenly w-[50%] cursor-pointer">
               <div onClick={() => {routes.push("/")}} className={`${routes.route == '/' ? 'font-bold text-[#F87171]' : ''} `}>Home</div>
               <div onClick={() => {routes.push("/Product")}} className={`${routes.route == '/Product' ? 'font-bold text-[#F87171]' : ''}`}>Product</div>
               <div onClick={() => {routes.push("/AboutUs")}} className={`${routes.route == '/AboutUs' ? 'font-bold text-[#F87171]' : ''}`}>About Us</div>
               <div onClick={() => {routes.push("/Contact")}} className={`${routes.route == '/Contact' ? 'font-bold text-[#F87171]' : ''}`}>Contact</div>
            </div>
            <div className=" bg-black">

            </div>
         </div>
      </div>
   );
};

export default Navbar;
