import React, { useEffect, useState } from "react";
import { accountBalance } from "../../utils/near";
import Logo from "./Logo";
import WalletInfo from "./WalletInfo";

type HeaderProps = {
  loginAction: () => void;
  logoutAction: () => void;
  accountId: string | null;
};

const Header = ({ loginAction, logoutAction, accountId }: HeaderProps) => {
  const [walletBalance, setWalletBalance] = useState("");

  useEffect(() => {
    const getBalance = async () => {
      if (accountId) {
        const balance = await accountBalance();
        setWalletBalance(balance);
      }
    };

    getBalance();
  }, [accountId]);

  return (
    <nav className="bg-white w-full border-b md:border-0 md:static">
      <div className="items-center justify-between  px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Logo />
        </div>
        <div className="inline-block">
          {accountId ? (
            <WalletInfo balance={walletBalance} logoutAction={logoutAction} accountId={accountId} />
          ) : (
            <button
              className="py-3 px-4 text-white bg-pink-600 hover:bg-pink-700 rounded-md shadow"
              onClick={loginAction}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
