import { useEffect, useState } from "react";
import { useAuth } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

  const MyAddedCars = () => {
  const { user } = useAuth();
  const [cars, setCars] = useState([]);

useEffect(() => {

 if (!user?.email) return;
 fetch(`http://localhost:5000/my-cars?email=${user.email}`, {
 credentials: "include",

})

 .then(res => res.json())
 .then(data => setCars(data));

  }, [user]);

 const handleDelete = (id) => {
 const confirmDelete = window.confirm("Are you sure you want to delete this car?");

     if (!confirmDelete) return;
    fetch(`http://localhost:5000/cars/${id}`, {
    method: "DELETE",

 })
  .then(res => res.json())
  .then(() => {
       
  setCars(prev => prev.filter(car => car._id !== id));

 });

  };

  return (

     <div className="min-h-screen bg-[#050816] text-white px-6 py-10">
    <h1 className="text-3xl font-bold text-center mb-10">  My Added Cars </h1>
   <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {cars.map(car => (
  <div
     key={car._id}
     className="bg-[#0B0F19] p-5 rounded-xl border border-white/10"
 >

 <img
    src={car.img}
   className="w-full h-40 object-cover rounded-lg"
  alt={car.name}
 />

 <h2 className="text-xl font-bold mt-3">{car.name}</h2>
 <p className="text-gray-400">{car.type}</p>
 <p className="text-cyan-400 font-bold mt-2">
     ${car.price}
  </p>

<div className="flex gap-3 mt-4">

 <Link

  to={`/update-car/${car._id}`}
  className="bg-yellow-500 px-3 py-1 rounded"

> Update </Link>

<button
   onClick={() => handleDelete(car._id)}
   className="bg-red-500 px-3 py-1 rounded"
 >  Delete </button>

 </div>
   </div>

))}

   </div>
 </div>
 
  );
};

export default MyAddedCars;