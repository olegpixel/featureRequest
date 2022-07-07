import React from "react";
import { ItemType } from "../../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

type ListItemProps = {
  data: ItemType;
  index: number;
};

const ListItem = ({ data, index }: ListItemProps) => {
  return (
    <li className="p-3 bg-white rounded-sd shadow w-full mt-2 flex justify-between">
      <div className="p-3 mr-4">
        <p className="text-gray-800 font-bold text-4xl">{index + 1}</p>
      </div>
      <div className="items-start content-start flex-1">
        <div className="justify-start flex">
          <p className="text-xl font-bold text-blue-700">{data.title}</p>
        </div>
        <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
          <span className="flex items-center text-gray-500">
            <FontAwesomeIcon
              icon={solid("link")}
              className="svg-icon w-5 h-5 text-black-500 pr-2"
            />
            <a href={data.url} target="_blank" rel="noreferrer">
              {data.url}
            </a>
          </span>
          <span className="flex items-center text-gray-500">
            <FontAwesomeIcon
              icon={solid("user")}
              className="svg-icon w-5 h-5 text-black-500 pr-2"
            />
            {data.name}
          </span>
        </div>
      </div>
      <div className="p-5 ml-4">
        <p className="text-gray-800 font-bold text-xl">
          {Number(data.balance) * 10 ** -24} NEAR
        </p>
      </div>
    </li>
  );
};

export default ListItem;
