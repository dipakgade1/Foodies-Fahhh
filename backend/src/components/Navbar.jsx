import { NavLink, useNavigate } from "react-router-dom";

function Navbar({ cart }) {

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  // Total cart quantity
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur-md text-white shadow-lg">

      {/* Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-orange-400 cursor-pointer"
      >
        🍔 Foodies Fahhhh....
      </h1>

      {/* Links */}
      <div className="space-x-8 hidden md:flex items-center">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 font-semibold"
              : "hover:text-orange-400 transition duration-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 font-semibold"
              : "hover:text-orange-400 transition duration-300"
          }
        >
          Menu
        </NavLink>

        {/* Cart with badge */}
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 font-semibold relative"
              : "hover:text-orange-400 transition duration-300 relative"
          }
        >
          🛒 Cart

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}

        </NavLink>

        {/* Login / Profile */}
        {!isLoggedIn ? (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 font-semibold"
                : "hover:text-orange-400 transition duration-300"
            }
          >
            Login
          </NavLink>
        ) : (
          <div className="flex items-center gap-4">

            {/* Profile Icon */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              className="w-8 h-8 cursor-pointer hover:scale-110 transition"
            />

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="bg-orange-500 px-3 py-1 rounded hover:bg-orange-600 transition"
            >
              Logout
            </button>

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;