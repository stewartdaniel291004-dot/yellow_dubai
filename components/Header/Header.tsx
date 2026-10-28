import React from "react";
import Image from "next/image"; 
import logo from "../../public/logo.png";
import GetButton from "./GetStarted";
import Loginbutton from "./Loginbutton";

const Header = () => {
  return (
    <div className="header-section">
    <div className="header-container-st">
      <div className="logo-box">
        <Image src={logo} alt="Logo" width={100} height={50} />
      </div>
      <div className="contact-header-box-st">
        <div className="buttons-boxes">
            <GetButton title="Get Started" />
            <Loginbutton />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
