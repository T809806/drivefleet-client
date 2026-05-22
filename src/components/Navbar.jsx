import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { logoutUser } from "../firebase/firebase.auth";

const Navbar = () => {

   const { user } = useAuth();
   const [open, setOpen] = useState(false);
    
return (

  <header className="bg-[#0B0F19]/95 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">

       <div className="max-w-7xl mx-auto px-5">
       <div className="flex items-center justify-between h-20">

   <Link to="/">

     <h1 className="text-3xl font-extrabold tracking-wide text-white"> Drive <span className="text-cyan-400"> Fleet </span> </h1>

   </Link>

   <nav className="hidden md:flex items-center gap-8">

    <Link
     className="text-gray-300 hover:text-cyan-400 duration-300"
     to="/"
     > Home </Link>

 <Link
  className="text-gray-300 hover:text-cyan-400 duration-300"
     to="/cars"
   > Explore Cars </Link>

 <Link
    className="text-gray-300 hover:text-cyan-400 duration-300"
      to="/add-car"
 >  Add Car </Link>

<Link
    className="text-gray-300 hover:text-cyan-400 duration-300"
      to="/my-bookings"
> My Bookings </Link>

</nav>

  {
         user ? (
        <div className="hidden md:flex items-center gap-4">
        <p className="text-sm text-cyan-400">

{user.email}

</p>

</div>

  ) : (

<div className="hidden md:flex gap-4">

   <Link
     to="/login"
     className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-6 py-2 rounded-full duration-300 shadow-lg shadow-cyan-500/20"
 > Login </Link>

   <Link
     to="/register"
     className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold px-6 py-2 rounded-full duration-300"
   > Register </Link>

 </div>

  )
}

       
 <button onClick={() => setOpen(!open)} className="md:hidden text-white text-3xl">  ☰  </button>

 </div>
 </div>

      
{
 open && (
   <div className="md:hidden bg-[#111827] border-t border-white/10">
   <div className="flex flex-col p-5 gap-5">

   <Link
      className="text-gray-300 hover:text-cyan-400"
      to="/"
      > Home </Link>

   <Link
     className="text-gray-300 hover:text-cyan-400"
       to="/cars"
  > Explore Cars </Link>

   <Link
      className="text-gray-300 hover:text-cyan-400"
      to="/add-car"
   > Add Car </Link>

  <Link
     className="text-gray-300 hover:text-cyan-400"
      to="/my-bookings"
   > My Bookings </Link>

 <button className="bg-cyan-400 text-black py-2 rounded-full font-semibold"> Login </button>

   </div>

   </div>

   )
}
 </header>

  );
};

export default Navbar;