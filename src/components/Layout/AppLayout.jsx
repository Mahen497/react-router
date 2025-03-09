import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () =>{

   const navigation = useNavigation();

   return(
      <>
         <Header/>
         <br />
         <Outlet/>
         <br />
         <Footer/>
      </>
   )
}

export default AppLayout;