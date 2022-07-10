import environment from "./config";
import { connect, Contract, keyStores, WalletConnection } from "near-api-js";
import { formatNearAmount } from "near-api-js/lib/utils/format";

const nearEnv = environment("testnet");

declare global {
  interface Window {
    walletConnection?: any;
    accountId?: any;
    contract?: any;
  }
}

export async function initializeContract() {
  // @ts-ignore
  const near = await connect({
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    ...nearEnv,
  });

  window.walletConnection = new WalletConnection(near, null);
  window.accountId = window.walletConnection.getAccountId();
  window.contract = new Contract(
    window.walletConnection.account(),
    nearEnv.contractName,
    {
      viewMethods: ["getItem", "getItems"],
      changeMethods: ["createItem", "upVote"],
    }
  );
}

export async function accountBalance() {
  return formatNearAmount(
    (await window.walletConnection.account().getAccountBalance()).total,
    5
  );
}

export async function accountDetails() {
  return await window.walletConnection.account().getAccountDetails();
}

export async function getAccountId() {
  return window.walletConnection.getAccountId();
}

export function login() {
  window.walletConnection.requestSignIn(nearEnv.contractName);
}

export function logout() {
  window.walletConnection.signOut();
  window.location.reload();
}
