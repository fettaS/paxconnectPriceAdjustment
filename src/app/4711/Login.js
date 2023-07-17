"use client";
import { React, useState, useEffect } from "react";
import axios from "axios";

function Login({ onLogin }) {
  const [loginName, setLoginName] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    axios
      .get(
        `https://test-central.smartberatung.com/v1/Filemaker/PriceAdjustment/Demo/1/${loginName}`
      )
      .then((response) => {
        const body = response.data;
        setData(body);
        onLogin();
      })
      .catch((error) => {
        setError("Ihr Login Name ist falsch");
      });

    console.log(data.info);
    console.log(loginName);
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40  ring-2 ring-paxOrange lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-paxOrange uppercase">
          Anmelden
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="customerNumber"
              className="block text-sm font-semibold text-black"
            >
              Kundennummer
            </label>
            <input
              type="number"
              placeholder="4711"
              disabled={true}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="loginName"
              className="block text-sm font-semibold text-gray-800"
            >
              Login Name
            </label>
            <input
              type="text"
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {error != "" ? <p className="text-error"> {error} </p> : <p></p>}
          </div>
          <div className="mt-6">
            <button
              onClick={handleClick}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-paxOrange rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
