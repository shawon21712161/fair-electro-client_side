import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <>
          {" "}
          <li>
            <NavLink to="/addproduct">Add To Product</NavLink>
          </li>
          <li>
            <NavLink to="/addToCart">Cart Items</NavLink>
          </li>{" "}
        </>
      )}
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logout().then().catch();
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/">
            <p className="btn btn-ghost text-xl">Fair Electronics</p>
          </Link>
        </div>
        {user ? (
          <div className="navbar-end mr-2">
            <p className="mr-2 ">{user ? user.displayName : user.email}</p>
            <div className="avatar mx-2">
              <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <button className=" btn btn-sm" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-end m-2">
            <Link to="/login">
              <button className=" btn btn-sm">LogIn</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
