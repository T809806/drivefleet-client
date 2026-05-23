import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

   const MainLayout = () => {

   return (

    <div className="bg-[#050816] min-h-screen text-white">

        <Navbar />
        <div>
        <Outlet />
        <Footer />
        </div>

</div>

  );
};

export default MainLayout;