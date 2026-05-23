import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { logoutUser } from "../firebase/firebase.auth";

const Navbar = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleLogout = async () => {
    await logoutUser();
    setDropdown(false);
    setOpen(false);
  };

  return (
    <header className="bg-[#0B0F19]/95 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" onClick={() => { setOpen(false); setDropdown(false); }}>
            <h1 className="text-3xl font-extrabold tracking-wide text-white">
              Drive <span className="text-cyan-400">Fleet</span>
            </h1>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8">

            <Link className="text-gray-300 hover:text-cyan-400" to="/">Home</Link>
            <Link className="text-gray-300 hover:text-cyan-400" to="/cars">Explore Cars</Link>

            {user && (
              <>
                <Link className="text-gray-300 hover:text-cyan-400" to="/add-car">
                  Add Car
                </Link>

                <Link className="text-gray-300 hover:text-cyan-400" to="/my-bookings">
                  My Bookings
                </Link>

                <Link className="text-gray-300 hover:text-cyan-400" to="/my-cars">
                  My Added Cars
                </Link>
              </>
            )}

          </nav>

          {/* AUTH SECTION (DESKTOP) */}
          <div className="hidden md:flex items-center gap-4 relative">

            {user ? (
              <>
                {/* Profile Button */}
                <button
                  onClick={() => setDropdown(prev => !prev)}
                  className="text-cyan-400"
                >
                  {user.email}
                </button>

                 <button
    onClick={handleLogout}
    className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-full"
  >
    Logout
  </button>


                {/* Dropdown */}
                {dropdown && (
                  <div className="absolute right-0 top-10 bg-[#111827] p-3 rounded shadow-lg flex flex-col gap-2 w-44">

                    <Link
                      to="/add-car"
                      onClick={() => setDropdown(false)}
                      className="hover:text-cyan-400"
                    >
                      Add Car
                    </Link>

                    <Link
                      to="/my-bookings"
                      onClick={() => setDropdown(false)}
                      className="hover:text-cyan-400"
                    >
                      My Bookings
                    </Link>

                    <Link
                      to="/my-cars"
                      onClick={() => setDropdown(false)}
                      className="hover:text-cyan-400"
                    >
                      My Added Cars
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="text-red-500 text-left"
                    >
                      Logout
                    </button>

                  </div>
                )}
              </>
            ) : (
              <>
                <Link to="/login" className="bg-cyan-400 text-black px-6 py-2 rounded-full">
                  Login
                </Link>

                <Link to="/register" className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-full">
                  Register
                </Link>
              </>
            )}

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(prev => !prev)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#111827] border-t border-white/10">
          <div className="flex flex-col p-5 gap-5">

            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/cars" onClick={() => setOpen(false)}>Explore Cars</Link>

            {user && (
              <>
                <Link to="/add-car" onClick={() => setOpen(false)}>Add Car</Link>
                <Link to="/my-bookings" onClick={() => setOpen(false)}>My Bookings</Link>
                <Link to="/my-cars" onClick={() => setOpen(false)}>My Added Cars</Link>
              </>
            )}

            {user ? (
              <>
                <p className="text-cyan-400">{user.email}</p>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white py-2 rounded-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="bg-cyan-400 text-black py-2 rounded-full text-center" to="/login">
                  Login
                </Link>

                <Link className="border border-cyan-400 text-cyan-400 py-2 rounded-full text-center" to="/register">
                  Register
                </Link>
              </>
            )}

          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;