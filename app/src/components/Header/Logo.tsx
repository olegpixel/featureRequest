import React from "react";
import logoImg from '../../assets/img/logo.png'

const Logo = () => {
  return (
    <div className="items-center justify-between sm:flex">
      <img src={logoImg} alt='logo mascot' width={270} />
    </div>
  );
};

export default Logo;
