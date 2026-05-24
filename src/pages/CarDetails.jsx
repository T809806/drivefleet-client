import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

    const CarDetails = () => {
    const { id } = useParams();
   const { user } = useAuth();
   const [car, setCar] = useState(null);

  useEffect(() => {

   fetch(`${import.meta.env.VITE_API_URL}/cars/${id}`)
      .then(res => res.json())
      .then(data => setCar(data));
  }, [id]);

  if (!car) {
    return (
      <div className="text-white text-center py-20">
        Loading...
      </div>
    );
  }

  const handleBooking = () => {

    const bookingData = {
    carName: car.name,
    price: car.price,
    img: car.img,
    bookingDate: new Date(),
     userEmail: user.email
  };

  fetch(`${import.meta.env.VITE_API_URL}/bookings`, {

      method: "POST",
      headers: {
       "content-type": "application/json",
    },

    body: JSON.stringify(bookingData),
  })

    .then(res => res.json())
    .then(data => {
      alert("Booking Successful!");
    });
};

  return (

     <div className="min-h-screen bg-[#0B0F19] text-white flex items-start justify-center px-4 pt-6">
     <div className="max-w-4xl mx-auto bg-[#0B0F19] rounded-2xl p-6">
    <img
     src={car.img}
     alt={car.name}
     className="w-full h-80 object-cover rounded-xl"
   />

 <h1 className="text-3xl font-bold mt-6">  {car.name} </h1>
 <p className="text-gray-400 mt-2">
    {car.type} • {car.seats} Seats
  </p>

  <p className="text-gray-400 mt-2">
     📍 {car.location}
 </p>

  <p className="text-cyan-400 text-2xl font-bold mt-4">
    ${car.price} / day
  </p>

  <p className="mt-5 text-gray-300">
     {car.description}
   </p>

  <button
  onClick={handleBooking}
  className="mt-4 bg-cyan-400 text-black px-6 py-2 rounded-full"
>
  Book Now

</button>

</div>

 </div>
 
  );
};

export default CarDetails;