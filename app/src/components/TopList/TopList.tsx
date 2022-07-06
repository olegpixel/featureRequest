import React from "react";
import ListItem from "./ListItem";

const TopList = () => {
  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto">
      <div className="mt-8 items-center justify-between sm:flex">
        <ListItem />
      </div>
    </footer>
  );
};

export default TopList;
