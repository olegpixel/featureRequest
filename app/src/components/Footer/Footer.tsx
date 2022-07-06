import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const Main = () => {
  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto">
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">2022 Richy Top / NEAR dApp</div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a
                href="https://github.com/olegpixel/richyTop"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={brands("github")}
                  className="svg-icon w-6 h-6 text-iron-500 align-middle"
                />
              </a>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a
                href="https://linkedin.com/in/olegpixel"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={brands("linkedin")}
                  className="svg-icon w-6 h-6 text-blue-500 align-middle"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Main;
