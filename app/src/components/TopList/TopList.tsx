import React from "react";
import ListItem from "./ListItem";
import { ItemType } from "../../utils/types";

type TopListProps = {
  items: ItemType[];
};

const TopList = ({ items }: TopListProps) => {
  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto">
      <div className="mt-8 items-center place-content-center sm:flex">
        <ul className="w-3/4 items-center">
          {items.map((item, ind) => (
            <ListItem data={item} index={ind} />
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default TopList;
