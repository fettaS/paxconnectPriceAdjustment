"use client";
import paxLogo from "next/image";
import Nav from "../../components/Nav";
import Priceadjustement from "@/app/4711/Priceadjustement";
import Login from "@/app/4711/Login";
import { React, useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Nav />
      {isLoggedIn ? <Priceadjustement /> : <Login onLogin={handleLogin} />}
    </div>
  );
}
