import { useState } from "react";
import { useAuth } from "../provider/AuthProvider";

   const AddCar = () => {
   const { user } = useAuth();
   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState("");
   const [error, setError] = useState("");

const handleAddCar = (e) => {
    e.preventDefault();
   setLoading(true);
   setSuccess("");
   setError("");

    
if (!user || !user.email) {

 setError("❌ User not logged in");
 setLoading(false);
 return;
 }
 const form = e.target;
 const car = {
      name: form.name.value,
       img: form.img.value,
       type: form.type.value,
       seats: form.seats.value,
      price: form.price.value,
       location: form.location.value,
      description: form.description.value,
      ownerEmail: user.email,
      available: true,
      createdAt: new Date(),
  };

fetch(`${import.meta.env.VITE_API_URL}/cars`, {
   method: "POST",
   headers: {
  "content-type": "application/json",
   },

 credentials: "include", 
  body: JSON.stringify(car),
})
      
.then((res) => res.json())
 .then((data) => {
  console.log(data);
  if (data.success) {
  setSuccess("🚗 Car added successfully!");
  form.reset();
} else {
  setError("❌ Failed to add car");
}

  setLoading(false);
  })
  .catch((err) => {
  console.log(err);

  setError("❌ Something went wrong!");
   setLoading(false);
  });

  };

  return (

    <div className="min-h-screen bg-[#050816] text-white px-6 py-5">
    <div className="max-w-xl mx-auto bg-[#0B0F19] p-4 rounded-2xl border border-white/10">
    <h1 className="text-xl font-bold text-center mb-8">  Add A Car </h1>
    <form onSubmit={handleAddCar} className="space-y-5">
 <div>
     <label className="block mb-2"> Car Name </label>
     <input
       type="text"
       name="name"
       required
      className="w-full bg-[#111827] border border-white/10 rounded-lg px-4 py-2 outline-none"
    />
 </div>

 <div>
  <label className="block mb-2" > Image URL </label>
   <input
     type="text"
     name="img"
    required
   className="w-full bg-[#111827] border border-white/10 rounded-lg px-4 py-3 outline-none"
  />
</div>

 <div>
  <label className="block mb-2"> Car Type </label>
     <input
      type="text"
      name="type"
      required
     className="w-full bg-[#111827] border border-white/10 rounded-lg px-4 py-2 outline-none"
   />
 </div>

 <div>
     <label className="block mb-2">Seats</label>
     <input
       type="number"
       name="seats"
       required
       className="w-full bg-[#111827] border border-white/10 rounded-lg px-4 py-3 outline-none"
   />
 </div>

  <div>
   <label className="block mb-2"> Price Per Day </label>
   <input
      type="number"
       name="price"
       required
       className="w-full bg-[#111827] border border-white/10 rounded-lg px-4 py-3 outline-none"
   />
 </div>

<div>
<label className="block mb-2"> Location </label>
  <input
   type="text"
   name="location"
  required
 className="w-full bg-[#111827] border border-white/10 rounded-lg px-4 py-3 outline-none" />
</div>

 <div>
   <label className="block mb-2"> Description </label>
    <textarea
       name="description"
       rows="4"
       className="w-full bg-[#111827] border border-white/10 rounded-lg px-4 py-3 outline-none"
    > </textarea>
  </div>

        
  {success && (
     <p className="text-green-400 font-medium">
     {success}
   </p>
 )}

         
 {error && (
   <p className="text-red-400 font-medium">
      {error}
     </p>
  )}

          
 <button
     type="submit"
    disabled={loading}
   className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-3 rounded-full duration-300" >
   {loading ? "Adding..." : "Add Car"}

 </button>

 </form>

</div>
 </div>
 
  );
};

export default AddCar;