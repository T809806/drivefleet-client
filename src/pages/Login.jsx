import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { loginUser, googleLogin } from "../firebase/firebase.auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state || "/";
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // 🔵 Firebase login
    loginUser(email, password)
      .then(() => {

        // 🔐 JWT backend login (FIXED ROUTE)
        fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("JWT login success:", data);
            setError("");
            navigate(from);
          })
          .catch(() => {
            setError("Server login failed");
          });

      })
      .catch(() => setError("Invalid login"));
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {

        // 🔥 real Google email
        const email = result.user.email;

        // 🔐 FIXED ROUTE HERE ALSO
        fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email }),
        })
          .then(() => {
            setError("");
            navigate(from);
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white">

      <div className="w-96 p-6 bg-[#0B0F19] rounded-xl border border-white/10">

        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>

        <form onSubmit={handleLogin} className="space-y-3">

          <input
            name="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-black"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-black"
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button className="w-full bg-cyan-400 text-black py-2 rounded">
            Login
          </button>

        </form>

        <button
          onClick={handleGoogle}
          className="w-full mt-3 border border-white/20 py-2 rounded"
        >
          Google Login
        </button>

        <p className="text-sm mt-3 text-center">
          No account?{" "}
          <Link to="/register" className="text-cyan-400">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;