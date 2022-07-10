import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

type WalletInfoProps = {
  logoutAction: () => void;
  balance: string;
  accountId: string;
};

const WalletInfo = ({ logoutAction, balance, accountId }: WalletInfoProps) => {
  const [opened, setOpened] = useState(false);
  return (
    <div className={`relative`}>
      <div className="flex items-center space-x-4">
        <button
          className="outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 focus:ring-indigo-900 align-middle"
          onClick={() => setOpened(!opened)}
        >
          <FontAwesomeIcon
            icon={solid("user")}
            className="svg-icon w-4 h-4 text-gray-500 align-middle p-3"
          />
          {accountId}
          <FontAwesomeIcon
            icon={solid("chevron-down")}
            className="svg-icon w-4 h-4 text-gray-500 align-middle p-3"
          />
        </button>
      </div>
      <div
        className={`bg-white top-12 pb-3 right-0 mt-5 space-y-5 lg:absolute lg:border place-items-center lg:rounded-md lg:text-sm lg:w-64 lg:shadow-md lg:space-y-0 lg:mt-0 flex flex-col ${
          opened ? "" : "lg:hidden"
        }`}
      >
        <div className="m-4 font-bold text-md">Balance: {balance} NEAR</div>

        <button
          onClick={logoutAction}
          className="px-7 py-2 w-40 text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-900 hover:shadow block"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default WalletInfo;
