import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, googleButton, gitHubButton } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handlelogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const loggedinUser = {
      email,
      password,
    };
    console.log(loggedinUser);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);

        //navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // google Button
  const handleGoogle = () => {
    googleButton()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "success",
          text: "User Login Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  // github button

  const handleGithub = () => {
    gitHubButton()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="my-10  items-center justify-center">
      <section className="bg-white  dark:bg-gray-900">
        <div className="container    px-6 mx-auto">
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
            sign In
          </h1>
          <form onSubmit={handlelogin} className="w-full max-w-md">
            <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <input
                type="name"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3  font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign in
              </button>

              <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                or sign in with
              </p>

              <div className="text-center w-full mt-2">
                <button
                  onClick={handleGoogle}
                  className="btn btn-outline w-full "
                >
                  <FcGoogle className="text-2xl"></FcGoogle>Sign In With Google
                </button>
              </div>
              <div className="text-center w-full mt-2">
                <button
                  onClick={handleGithub}
                  className="btn btn-outline w-full "
                >
                  <FaGithub className="text-2xl"></FaGithub>Sign In With Github
                </button>
              </div>

              <div className="mt-6 text-center ">
                <Link to="/signup">
                  <p className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                    Don’t have an account yet? Sign up
                  </p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
