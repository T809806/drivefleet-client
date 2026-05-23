import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser, googleLogin } from "../firebase/firebase.auth";

     const Register = () => {
     const navigate = useNavigate();
     const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

   if (!/[A-Z]/.test(password)) return setError("Must have uppercase letter");
    if (!/[a-z]/.test(password)) return setError("Must have lowercase letter");
    if (password.length < 6) return setError("Min 6 characters required");

 registerUser(email, password)

  .then(() => {
   setError("");
   navigate("/login");

 })

  .catch((err) => setError(err.message));

  };

const handleGoogle = () => {

    googleLogin()
      .then(() => navigate("/"))
      .catch((err) => setError(err.message));

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white">
      <div className="w-96 p-6 bg-[#0B0F19] rounded-xl border border-white/10">
      <h2 className="text-2xl font-bold mb-5 text-center"> Register </h2>

<form onSubmit={handleRegister} className="space-y-3">

   <input name="name" placeholder="Name" className="w-full p-2 rounded bg-black" />
   <input name="email" placeholder="Email" className="w-full p-2 rounded bg-black" />
  <input name="photo" placeholder="Photo URL" className="w-full p-2 rounded bg-black" />
   <input name="password" type="password" placeholder="Password" className="w-full p-2 rounded bg-black" />

 {error && <p className="text-red-500 text-sm">{error}</p>}
     <button className="w-full bg-cyan-400 text-black py-2 rounded"> Register </button>

 </form>

 <button
   onClick={handleGoogle}
   className="w-full mt-3 border border-white/20 py-2 rounded"
 >
  Google Login

</button>

<p className="text-sm mt-3 text-center">
   Already have account? <Link to="/login" className="text-cyan-400"> Login </Link>
 </p>

      </div>

 </div>

  );
};

export default Register;