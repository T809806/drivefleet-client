import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

 const Footer = () => {

 return (

 <footer className="relative bg-[#050816] text-gray-300 border-t border-white/10 mt-20 overflow-hidden">

 <div className="absolute inset-0 bg-cover bg-center opacity-10"
       style={{
       backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600')"

        }}
     >
 </div>

 <div className="absolute inset-0 bg-[#050816]/90"> </div>
 <div className="relative z-10">
 <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
<div>
   <h2 className="text-2xl font-bold text-white"> Drive <span className="text-cyan-400"> Fleet </span> </h2>
   <p className="mt-4 text-gray-400"> Rent your dream car easily. Fast booking, affordable price, and premium experience. </p>

 </div>

 <div>
   <h3 className="text-lg font-semibold text-white mb-4">  Quick Links </h3>

   <ul className="space-y-2">

     <li className="hover:text-cyan-400 cursor-pointer"> Home </li>
     <li className="hover:text-cyan-400 cursor-pointer"> Explore Cars </li>
     <li className="hover:text-cyan-400 cursor-pointer"> Add Car </li>
     <li className="hover:text-cyan-400 cursor-pointer"> My Bookings </li>

   </ul>

 </div>

<div>
  <h3 className="text-lg font-semibold text-white mb-4">  Contact </h3>
   <p className="text-gray-400">

      Email: drivefleet34@gmail.com <br />
      Phone: +880 1222233334
  </p>

 <div className="flex gap-4 mt-4 text-xl">

 <FaFacebook className="hover:text-cyan-400 cursor-pointer" />
 <FaTwitter className="hover:text-cyan-400 cursor-pointer" />
 <FaInstagram className="hover:text-cyan-400 cursor-pointer" />

</div>
 </div>

 </div>

 <div className="text-center py-4 border-t border-white/10 text-gray-500 text-sm">
    © {new Date().getFullYear()} DriveFleet. All rights reserved.

 </div>

</div>

  </footer>

  );
};

export default Footer;
