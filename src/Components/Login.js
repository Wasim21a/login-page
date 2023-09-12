import React, { useState } from "react";
import bg from "./Images/bg.jpg";
import logo from "./Images/logo.jpg";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateUsername = () => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(username)) {
          setUsernameError("Invalid Email Address");
          return false;
        }
        setUsernameError("");
        return true;
    };

    const validatePassword = () => {
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
        if (!passwordPattern.test(password)) {
          setPasswordError(
            "Invalid Password"
          );
          return false;
        }
        setPasswordError("");
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();
    
        if (isUsernameValid && isPasswordValid) {
          setPassword('');
          setUsername('');
          setPasswordError('');
          setUsernameError('');
        }
    };


  return (
    <div className="m-8 grid grid-cols-1 sm:grid-cols-2 ">
        <div className="m-1 sm:block relative">
            <img
                className="rounded-lg  w-full h-full object-cover"
                src={require("./Images/bg.jpg")}
                alt=""
            />
            <div className=" text-white text-md font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center lg:text-lg">
                <img
                    className="w-1/2 h-auto mx-auto"
                    src={require("./Images/logo.jpg")}
                    alt=""
                />
                <h1>Defence Housing Authority,</h1>
                <h1>Islamabad</h1>
            </div>
        </div>

        <div className="m-1 rounded-lg bg-gray-500 flex flex-col justify-around">
            <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
                <h2 className="text-3xl text-gray-200 font-bold text-center border-b-2 border-[#751A3D]">
                    SIGN IN
                </h2>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full flex flex-col text-gray-400 py-2 lg:w-1/2 pr-1">
                        <label className="text-left ">Username</label>
                        <input
                        className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        type="text"
                        placeholder="Email Address"
                        value={username}
                        onBlur={validateUsername}
                        onChange={(e) => setUsername(e.target.value)}

                        />
                        {usernameError && (
                            <p className="text-red-500">{usernameError}</p>
                        )}
                    </div>

                    <div className="w-full flex flex-col text-gray-400 py-2 lg:w-1/2 pl-1">
                        <label className="text-left">Password</label>
                        <input
                        className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onBlur={validatePassword}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordError && (
                            <p className="text-red-500">{passwordError}</p>
                        )}
                    </div>

                </div>
                <div className="flex justify-between text-gray-400 py-2">
                    <p className="flex items-center">
                    <input className="mr-2" type="checkbox" /> Remember Me
                    </p>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
                    SIGNIN
                </button>
            </form>
        </div>
    </div>
  );
}
