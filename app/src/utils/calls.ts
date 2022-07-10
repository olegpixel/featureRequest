import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export function createItem(
  name: string,
  title: string,
  url: string,
  id: string,
  nearAmount: number
) {
  const ATTACHED_TOKENS = parseNearAmount(nearAmount.toString());
  return window.contract.createItem(
    { item: { name, title, url, id } },
    GAS,
    ATTACHED_TOKENS
  );
}

export function getListItems() {
  return window.contract.getItems();
}

export function getReacentVotes() {
  return window.contract.getVotes();
}

export function upVote(
  id: string,
  nearAmount: number
) {
  const ATTACHED_TOKENS = parseNearAmount(nearAmount.toString());
  return window.contract.upVote(
    { id },
    GAS,
    ATTACHED_TOKENS
  );
}
