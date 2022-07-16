import { ListItem, topList, Vote, votesList } from "./model";
import { ContractPromiseBatch, context, u128 } from "near-sdk-as";

export function createItem(item: ListItem): void {
  let storedItem = topList.get(item.id);
  if (storedItem !== null) {
    throw new Error("Item with such id already exists");
  }
  ContractPromiseBatch.create(context.contractName).transfer(
    context.attachedDeposit
  );
  topList.set(item.id, ListItem.newItem(item));
  votesList.push(
    Vote.newVote({
      itemId: item.id,
      timestamp: context.blockTimestamp,
      balance: context.attachedDeposit,
    })
  );
}

export function getItem(id: string): ListItem | null {
  return topList.get(id);
}

export function getItems(): ListItem[] {
  const items = topList.values();

  const itemsSorted = items.sort((a, b) => {
    return u128.gt(a.balance, b.balance) ? -1 : 1;
  });
  return itemsSorted;
}

export function upVote(id: string): void {
  const item = getItem(id);
  if (item == null) {
    throw new Error("Item not found");
  }
  ContractPromiseBatch.create(context.contractName).transfer(
    context.attachedDeposit
  );

  item.balance = u128.add(item.balance, context.attachedDeposit);
  topList.set(item.id, item);
  votesList.push(
    Vote.newVote({
      itemId: item.id,
      timestamp: context.blockTimestamp,
      balance: context.attachedDeposit,
    })
  );
}

export function getVotes(): Vote[] {
  const votes: Vote[] = [];
  const lastVoteNumber = votesList.length > 10 ? votesList.length - 10 : 0;
  for (let index = votesList.length; index >= lastVoteNumber; index--) {
    votes.push(votesList[index]);
  }
  return votes;
}

export function getVotesByItem(id: string): Vote[] {
  const item = getItem(id);
  if (item == null) {
    throw new Error("Item not found");
  }
  const votes: Vote[] = [];

  for (let index = 0; index < votesList.length; index++) {
    if(votesList[index].itemId == id) {
      votes.push(votesList[index]);
    }
  }
  return votes;
}
