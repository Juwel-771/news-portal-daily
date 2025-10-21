import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    
    const handleRegisterForm = (e) => {
        e.preventDefault();
        console.log(e.currentTarget); // return current form
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        const photoURL = form.get("photoURL"); // return current form data
        console.log(name, email, password, photoURL); // return current form data

        createUser(email, password)
        .then((result) => {
            console.log("account created successfully",result.user)
        }).catch((err) => {
            console.log(err);
        });

    };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl my-10 text-center">Create Accounts</h2>
        <form
          onSubmit={handleRegisterForm}
          className="md:w-3/4 lg:w-1/2 mx-auto"
        >
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              className="input"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
          </fieldset>
          <button className="btn btn-primary mt-4">Sign Up</button>
          <p className="mt-4">
            Already have account?
            <Link className="text-blue-600"> Login Now</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
