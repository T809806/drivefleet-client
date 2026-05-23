import { useNavigate } from "react-router-dom";

    const NotFound = () => {
    const navigate = useNavigate();

return (

    <div className="h-screen flex flex-col justify-center items-center bg-[#050816] text-white text-center px-4">
    <h1 className="text-7xl font-bold text-cyan-400"> 404 </h1>
    <h2 className="text-2xl font-semibold mt-4"> Oops! Page Not Found </h2>
    <p className="text-gray-400 mt-2 max-w-md"> The page you are looking for doesn’t exist or has been moved. </p>

<button
   onClick={() => navigate("/")}
   className="mt-6 bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-3 rounded-full font-semibold" >
 Back to Home
 </button>

  </div>
  
  );
};

export default NotFound;