import "@/styles/globals.css";
import Navbars from "../pages/component/navbar/index";
import Footer from "./component/footer";
import Spinners from "./component/spinner";
import { useState } from "react";

export default function App({ Component, pageProps }) {
   const [statusReload, setStatusReload] = useState(true);

   setTimeout(() => {
      setStatusReload(false);
   }, 1000);

   return (
      <>
         {statusReload ? <Spinners></Spinners> : ""}
         <Navbars></Navbars>
         <Component {...pageProps} />
         <Footer></Footer>
      </>
   );
}
