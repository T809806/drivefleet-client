import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-[#050816] min-h-screen text-white overflow-hidden">

      <Navbar />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6 py-16 md:py-24">

        {/* Left Side */}
        <div>

          <p className="text-cyan-400 font-semibold tracking-widest mb-5">
            PREMIUM CAR RENTAL
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            Drive Your <br />

            <span className="text-cyan-400">
              Dream Car
            </span>

          </h1>

          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">

            Explore luxury, sports, SUV and family cars
            at affordable daily rental prices with premium service.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            <button className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-8 py-4 rounded-full duration-300 shadow-lg shadow-cyan-500/20">

              Explore Cars

            </button>

            <button className="border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 rounded-full duration-300">

              Learn More

            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center">

          {/* Glow Effect */}
          <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1695444784307-32e5e8e19aa3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxjYXJzJTIwcGljc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="car"
            className="relative w-full max-w-md rounded-3xl shadow-2xl border border-white/10"
          />

        </div>

      </div>

    </div>
  );
};

export default Home;