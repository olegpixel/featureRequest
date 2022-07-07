import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
// import logoImg from '../../assets/img/369.jpg';

const Logo = () => {
  return (
    <div className="items-center justify-between sm:flex">
      {/* <img src={logoImg} alt='logo mascot' width={120} /> */}
      <FontAwesomeIcon
        icon={solid("money-bill-trend-up")}
        className="svg-icon w-11 h-11 text-pink-600 align-middle"
      />
      <p className="ml-4 font-bold text-4xl">RichyTop</p>
    </div>
  );
};

export default Logo;
