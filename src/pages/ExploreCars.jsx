import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const ExploreCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:5000/cars")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch cars");
        }
        return res.json();
      })
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

 useEffect(() => {
  fetch(`http://localhost:5000/cars?search=${search}`)
    .then((res) => res.json())
    .then((data) => setCars(data));
}, [search]);

  // 🔵 LOADING STATE
  if (loading) {
    return <Loader />;
  }

  // ❌ ERROR STATE
  if (error) {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl text-red-500 font-bold">
          Something went wrong
        </h2>

        <p className="text-gray-400 mt-2">{error}</p>

        <button
          onClick={() => window.location.reload()}
          className="mt-5 px-5 py-2 bg-cyan-400 text-black rounded-full"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white px-6 py-10">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Explore <span className="text-cyan-400">Cars</span>
        </h1>
        <p className="text-gray-400 mt-3">
          Find your perfect car for rent
        </p>
      </div>

    <div className="mb-8  flex justify-center">
  <input
    type="text"
    placeholder="Search cars..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full md:w-96 px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 text-white outline-none"
  />
</div>

      {/* Cars Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {cars.map((car) => (
          <div
            key={car._id}
            className="bg-[#0B0F19] border border-white/10 rounded-2xl p-5 
            hover:scale-105 transition duration-300"
          >

            {/* Image */}
            <img
              src={car.img}
              alt={car.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            {/* Info */}
            <h2 className="text-xl font-semibold">{car.name}</h2>

            <p className="text-gray-400 mt-1">
              {car.type} • {car.seats} Seats
            </p>

            <p className="text-gray-400 text-sm mt-1">
              📍 {car.location}
            </p>

            {/* Availability */}
            <p
              className={`mt-2 text-sm font-medium ${
                car.available ? "text-green-400" : "text-red-400"
              }`}
            >
              {car.available ? "Available" : "Not Available"}
            </p>

            {/* Price */}
            <p className="text-cyan-400 font-bold mt-3 text-lg">
              ${car.price} / day
            </p>

            {/* Button */}
            <Link to={`/cars/${car._id}`}>
              <button className="mt-4 w-full bg-cyan-400 hover:bg-cyan-300 text-black py-2 rounded-full font-semibold">
                View Details
              </button>
            </Link>

          </div>
        ))}

      </div>
    </div>
  );
};

export default ExploreCars;