import React from "react";
import { ItemType } from "../../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { formatNearAmount } from "near-api-js/lib/utils/format";

type ListItemProps = {
  data: ItemType;
  index: number;
  showUpVoteModal: () => void;
  accountConnected: boolean;
};

const ListItem = ({
  data,
  index,
  showUpVoteModal,
  accountConnected,
}: ListItemProps) => {
  return (
    <li className="p-2 bg-white rounded-sd shadow w-full mt-2 flex justify-between">
      <div className="mr-5">
        <p className="text-gray-800 font-bold text-4xl border rounded-full p-3 w-24">
          {index + 1}
        </p>
      </div>
      <div className="items-start content-start flex-1">
        <div className="justify-start flex">
          <p className="text-xl font-bold text-indigo-900">{data.title}</p>
        </div>
        <div className="mt-2 items-center space-y-2 text-sm sm:flex sm:space-x-4 sm:space-y-0">
          {data.url && data.url !== "" && (
            <span className="flex items-center text-gray-500">
              <FontAwesomeIcon
                icon={solid("link")}
                className="svg-icon w-5 h-5 text-black-500 pr-2"
              />
              <a href={data.url} target="_blank" rel="noreferrer">
                {data.url}
              </a>
            </span>
          )}
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
          {formatNearAmount(data.balance, 5)} NEAR
        </p>
      </div>
      {accountConnected && (
        <div className="p-1 ml-1 flex items-center text-lime-600">
          <FontAwesomeIcon
            icon={solid("circle-plus")}
            className="svg-icon w-6 h-6 text-black-500 pr-2 cursor-pointer"
            onClick={showUpVoteModal}
          />
        </div>
      )}
    </li>
  );
};

export default ListItem;
