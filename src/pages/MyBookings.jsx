import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyBookings = () => {

  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  

  useEffect(() => {
   fetch(`http://localhost:5000/bookings?email=${user.email}`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-white px-6 py-10">

      <h1 className="text-3xl font-bold text-center mb-10">
        My Bookings
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-[#0B0F19] p-5 rounded-xl border border-white/10"
          >

            <img
              src={booking.img}
              alt={booking.carName}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h2 className="text-xl font-semibold mt-4">
              {booking.carName}
            </h2>

            <p className="text-cyan-400 mt-2">
              ${booking.price} / day
            </p>

            <p className="text-gray-400 text-sm mt-2">
              {new Date(booking.bookingDate).toLocaleDateString()}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default MyBookings;