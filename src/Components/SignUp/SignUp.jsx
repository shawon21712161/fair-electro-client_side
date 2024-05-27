import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
// import toast from "react-hot-toast";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  // const [registerError, setRegisterError] = useState("");
  const { createUser } = useContext(AuthContext);
  const handlesignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const newUser = {
      name,
      photo,
      email,
      password,
    };
    if (!/^(?=.*[A-Za-z0-9])(?=.{7,})/.test(password)) {
      toast.error("Password Must have Less than 6 Characters");
      return;
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      toast.error("Password Must be a Capital letter");
      return;
    }
    // console.log(newUser);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Account Created Successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-100 my-10">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register Here!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <form onSubmit={handlesignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="photo"
                name="photo"
                placeholder="Photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="mt-6 text-center ">
              <Link to="/login">
                <p className="text-base font-semibold text-blue-500 hover:underline dark:text-blue-400">
                  Have an account ? Login here.
                </p>
              </Link>
            </div>
          </form>
          <Toaster></Toaster>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
