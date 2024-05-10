import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase-config";

const Registration = () => {
  const { registerWithPassword } = useAuth();

  const handleLoginWithPass = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, photoURL, password);
    registerWithPassword(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        alert("registered");
        // ...
      })
      .catch((error) => {
        console.log("opps");
        // ..
      });
  };

  return (
    <div className=" bg-[#f0f2f5]">
      <div className=" max-w-7xl flex flex-col justify-center items-center  min-h-screen mx-auto">
        <form
          onSubmit={handleLoginWithPass}
          className="w-[30%] mx-auto bg-white p-6 rounded-md  "
        >
          <h2 className=" text-3xl text-center my-4 font-bold text-[#535353]">
            Register Now
          </h2>
          <div className=" space-y-4 mb-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              className="input input-bordered w-full "
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Enter Your PhotoURl"
              name="photoURL"
              className="input input-bordered w-full "
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered w-full "
            />
            <input
              type="submit"
              value={"Register"}
              placeholder="Type here"
              className="input text-white btn bg-[#0866ff] input-bordered w-full "
            />
          </div>

          <p className=" text-center">
            Already have an account?
            <Link to={"/login"} className=" underline text-green-400">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
