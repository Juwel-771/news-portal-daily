import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router";

const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget); // return current form 
        const form = new FormData(e.currentTarget); // return current form data
        console.log(form.get('email')); // return current form data
    }

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl my-10 text-center">Login to you ID</h2>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input 
                type="email"
                name="email" 
                className="input" 
                placeholder="Email" />
            <label className="label">Password</label>
            <input 
                type="password"
                name="password" 
                className="input" 
                placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
          </fieldset>
          <button className="btn btn-secondary mt-4">Login</button>
          <p className="mt-4">Do't have any account? <Link className="text-blue-600">Register Now</Link> </p>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
