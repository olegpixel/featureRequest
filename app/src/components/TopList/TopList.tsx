import React from "react";
import ListItem from "./ListItem";
import { ItemType } from "../../utils/types";

type TopListProps = {
  items: ItemType[];
  showUpVoteModal: (itemId: string) => void;
  accountConnected: boolean;
};

const TopList = ({ items, showUpVoteModal, accountConnected }: TopListProps) => {
  return (
    <article className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto">
      <div className="mt-8 items-center place-content-center sm:flex">
        <ul className="w-3/4 items-center">
          {items.map((item, ind) => (
            <ListItem
              data={item}
              index={ind}
              key={item.id}
              accountConnected={accountConnected}
              showUpVoteModal={() => {
                showUpVoteModal(item.id);
              }}
            />
          ))}
        </ul>
      </div>
    </article>
  );
};

export default TopList;
