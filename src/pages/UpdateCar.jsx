import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

   const UpdateCar = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const [car, setCar] = useState(null);

 useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/cars/${id}`)
      .then(res => res.json())
      .then(data => setCar(data));

  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

 const form = e.target;

const updatedCar = {
 name: form.name.value,
 price: form.price.value,
 type: form.type.value,
 img: form.img.value,
 location: form.location.value,
 description: form.description.value,
 };

   fetch(`${import.meta.env.VITE_API_URL}/cars/${id}`, {
     method: "PUT",
      headers: {
        "content-type": "application/json",
 },

   body: JSON.stringify(updatedCar),
 })

.then(res => res.json())
 .then(() => {
 alert("Car Updated Successfully");
 navigate("/my-cars");
  });

  };

  if (!car) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  return (

    <div className="min-h-screen bg-[#050816] text-white px-6 py-10">
    <div className="max-w-xl mx-auto bg-[#0B0F19] p-6 rounded-2xl">
    <h1 className="text-3xl font-bold mb-6 text-center">  Update Car </h1>

 <form onSubmit={handleUpdate} className="space-y-4">

   <input
     name="name"
     defaultValue={car.name}
     className="w-full p-3 rounded bg-black"
 />

 <input
     name="price"
     defaultValue={car.price}
     className="w-full p-3 rounded bg-black"
  />

<input
   name="type"
   defaultValue={car.type}
   className="w-full p-3 rounded bg-black"
/>

 <input
   name="img"
   defaultValue={car.img}
   className="w-full p-3 rounded bg-black"
 />

<input
   name="location"
   defaultValue={car.location}
   className="w-full p-3 rounded bg-black"
/>

 <textarea
    name="description"
     defaultValue={car.description}
    className="w-full p-3 rounded bg-black"
/>

<button className="w-full bg-cyan-400 text-black py-3 rounded"> Update Car </button>

   </form>

 </div>

 </div>
 
  );
};

export default UpdateCar;