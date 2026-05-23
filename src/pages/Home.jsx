import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../components/Loader"; 

   const Home = () => {
   const navigate = useNavigate();
   const [cars, setCars] = useState([]);
   const [loading, setLoading] = useState(true); 

 useEffect(() => {

   setLoading(true); 
   fetch("http://localhost:5000/cars")
   .then((res) => res.json())
   .then((data) => {
   setCars(data);
   setLoading(false); 

   })
   .catch((err) => {
   console.log(err);
   setLoading(false); 

   });

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (

      <div className="bg-[#050816] text-white min-h-screen">
      <div className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
 <div
   className="absolute inset-0 bg-cover bg-center opacity-20"
   style={{
    backgroundImage:
   "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600')"
  }}
   > </div>

 <div className="absolute inset-0 bg-[#050816]/80"> </div>
 <div className="relative z-10">
 <h1 className="text-4xl md:text-5xl font-bold">  Rent Your Dream <span className="text-cyan-400"> Car </span>  </h1>
 <p className="text-gray-300 mt-4 max-w-2xl">
    Explore luxury, SUV and economy cars easily.
 </p>

 <button
   onClick={() => navigate("/cars")}
   className="mt-6 bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-3 rounded-full font-semibold"
  >
  Explore Cars

   </button>

 </div>
 </div>

<div className="px-6 py-20 max-w-7xl mx-auto">
     <h2 className="text-3xl font-bold text-center mb-10">  Available <span className="text-cyan-400"> Cars </span> </h2>

 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

  {cars.slice(0, 6).map((car) => (

   <div
       key={car._id}
      className="bg-[#0B0F19] border border-white/10 rounded-2xl p-5"
  >

  <img
     src={car.img}
     alt={car.name}
     className="w-full h-40 object-cover rounded-xl mb-4"
  />

 <h3 className="text-xl font-semibold">{car.name}</h3>

 <p className="text-gray-400 mt-1">
  {car.type} • {car.seats} Seats
 </p>

 <p className="text-cyan-400 font-bold mt-2">
    ${car.price} / day
 </p>

 <Link to={`/cars/${car._id}`}>

 <button className="mt-3 w-full bg-cyan-400 hover:bg-cyan-300 text-black py-2 rounded-full font-semibold">  View Details </button>

 </Link>

 </div>

   ))}

 </div>

 </div>

 <div className="max-w-7xl mx-auto px-6 py-20">

     <h2 className="text-3xl font-bold text-center mb-12"> Why Choose <span className="text-cyan-400"> DriveFleet </span> ? </h2>

 <div className="grid md:grid-cols-3 gap-8">

 <div className="bg-[#0B0F19] p-6 rounded-2xl text-center"> Fast Booking </div>
 <div className="bg-[#0B0F19] p-6 rounded-2xl text-center"> Affordable Price </div>
 <div className="bg-[#0B0F19] p-6 rounded-2xl text-center"> Trusted Service </div>

 </div>
</div>

     
<div className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-bold text-center mb-12"> How <span className="text-cyan-400"> DriveFleet </span> Works </h2>

 <div className="grid md:grid-cols-3 gap-8 text-center">
 <div className="bg-[#0B0F19] border border-white/10 p-6 rounded-2xl">
 <div className="text-5xl font-bold text-cyan-400"> 1 </div>
   <h3 className="text-xl font-semibold mt-4"> Search Car </h3>
   <p className="text-gray-400 mt-3"> Explore available cars using search and filters. </p>
 </div>

    
 <div className="bg-[#0B0F19] border border-white/10 p-6 rounded-2xl">

  <div className="text-5xl font-bold text-cyan-400"> 2 </div>
  <h3 className="text-xl font-semibold mt-4"> Book Instantly </h3>
 <p className="text-gray-400 mt-3"> Select your car and confirm booking in seconds. </p> </div>

 <div className="bg-[#0B0F19] border border-white/10 p-6 rounded-2xl">

   <div className="text-5xl font-bold text-cyan-400"> 3 </div>
   <h3 className="text-xl font-semibold mt-4"> Enjoy Ride </h3>
   <p className="text-gray-400 mt-3"> Pick your car and enjoy a smooth journey. </p>

 </div>
 </div>
</div>

</div>

 );
};

export default Home;