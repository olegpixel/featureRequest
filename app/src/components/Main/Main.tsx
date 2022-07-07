import React from "react";
import TopList from "../TopList/TopList";
import { ItemType } from "../../utils/types";

type MainProps = {
  items: ItemType[];
};

const Main = ({ items }: MainProps) => {
  console.log("items", items);
  return (
    <>
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
            Add your name to
            <span className="text-pink-600"> RichyTop</span>
          </h1>
        </div>

        <TopList items={items} />

        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          <button className="px-10 py-3.5 w-full bg-pink-600 text-white text-center rounded-md shadow-md block sm:w-auto">
            Add me in
          </button>
          <button className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto">
            Transactions
          </button>
        </div>
      </section>
    </>
  );
};

export default Main;
