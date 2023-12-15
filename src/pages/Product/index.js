import Spinners from "../component/spinner";
import { useState } from "react";

const Product = () => {
   const [statusReload, setStatusReload] = useState(true);

   setTimeout(() => {
      setStatusReload(false);
   }, 1000);
   return (
      <>
         {" "}
         {statusReload ? <Spinners></Spinners> : ""}
         <div>gallo</div>
      </>
   );
};

export default Product;
