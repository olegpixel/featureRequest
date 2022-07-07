import { PersistentUnorderedMap, u128, context } from "near-sdk-as";

@nearBindgen
export class ListItem {
  public id: string;
  public name: string;
  public title: string;
  public url: string;
  public timestamp: u64;
  public creator: string;
  public balance: u128;

  public static newItem(payload: ListItem): ListItem {
    const listItem = new ListItem();
    listItem.id = payload.id;
    listItem.name = payload.name;
    listItem.title = payload.title;
    listItem.url = payload.url;
    listItem.timestamp = context.blockTimestamp;
    listItem.creator = context.sender;
    listItem.balance = context.attachedDeposit;
    return listItem;
  }

  // TODO: make proper summation
  //   updateBalance(toBeAdded: u128): void {
  //     this.balance = this.balance + toBeAdded;
  //   }
}

export const topList = new PersistentUnorderedMap<string, ListItem>("TOP");
