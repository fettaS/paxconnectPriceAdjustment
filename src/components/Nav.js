import React from "react";
import paxLogo from "../assets/logo_paxconnect.png";
import Image from "next/image";

function Nav() {
  return (
    <div>
      <header className="flex justify-center">
        <Image
          className="mt-8"
          src={paxLogo}
          width="200"
          height="100"
          alt="Paxconnect Logo"
        ></Image>
      </header>
    </div>
  );
}

export default Nav;
