import { ListItem, topList } from "./model";
import { ContractPromiseBatch, context } from "near-sdk-as";

export function createItem(item: ListItem): void {
  //TODO: check if already exist

  //   ContractPromiseBatch.create(context.contractName).transfer(
  //     context.attachedDeposit
  //   );
  topList.set(item.id, ListItem.newItem(item));
}

export function getItem(id: string): ListItem | null {
  return topList.get(id);
}

export function getItems(): ListItem[] {
  return topList.values();
}

// export function increaseBallance(id: string): void {
//   const item = getItem(id);
//   if (item == null) {
//     throw new Error("Item not found");
//   }
//   ContractPromiseBatch.create(context.contractName).transfer(context.attachedDeposit);
//   item.updateBalance(context.attachedDeposit);
//   topList.set(item.id, item);
// }
