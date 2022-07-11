import React, { useState } from "react";
import TopList from "../TopList/TopList";
import AddItemModal from "../AddItemModal/AddItemModal";
import UpVoteModal from "../UpVoteModal/UpVoteModal";
import RecentVotesModal from "../RecentVotesModal/RecentVotesModal";
import { ItemType } from "../../utils/types";

type MainProps = {
  items: ItemType[];
  addItemAction: ({
    name,
    title,
    url,
    nearAmount,
  }: {
    name: string;
    title: string;
    url: string;
    nearAmount: number;
  }) => void;
  upVodeAction: ({
    itemId,
    nearAmount,
  }: {
    itemId: string;
    nearAmount: number;
  }) => void;
  loginAction: () => void;
  accountId: string | null;
};

const Main = ({
  items,
  addItemAction,
  upVodeAction,
  accountId,
  loginAction,
}: MainProps) => {
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [showUpVoteModal, setShowUpVoteModal] = useState(false);
  const [showRecentVotesModal, setShowRecentVotesModal] = useState(false);
  const [upVoteItemId, setUpVoteItemId] = useState("");

  return (
    <>
      <section className="mt-20 mx-auto max-w-screen-xl pb-4 px-2 sm:px-2">
        <div className="text-center space-y-4">
          <h1 className="text-indigo-900 font-bold text-4xl md:text-5xl">
            Feature Requests <span className="text-pink-600">Top List</span>
          </h1>
        </div>

        <TopList
          items={items}
          showUpVoteModal={(itemId: string) => {
            setUpVoteItemId(itemId);
            setShowUpVoteModal(true);
          }}
          accountConnected={accountId ? true : false}
        />

        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          {accountId && (
            <button
              onClick={() => {
                setShowAddItemModal(true);
              }}
              className="px-10 py-3.5 w-full bg-pink-600 text-white text-center rounded-md shadow-md block sm:w-auto disabled:bg-pink-300"
            >
              Add a request
            </button>
          )}
          <button
            onClick={() => setShowRecentVotesModal(true)}
            className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-900 hover:shadow block sm:w-auto"
          >
            Recent Votes
          </button>
        </div>
      </section>

      {showAddItemModal && (
        <AddItemModal
          closeAction={() => {
            setShowAddItemModal(false);
          }}
          addItemAction={(payload) => {
            setShowAddItemModal(false);
            addItemAction(payload);
          }}
        />
      )}

      {showUpVoteModal && (
        <UpVoteModal
          closeAction={() => {
            setShowUpVoteModal(false);
          }}
          voteAction={(nearAmount) => {
            setShowUpVoteModal(false);
            upVodeAction({
              itemId: upVoteItemId,
              nearAmount,
            });
          }}
          upVoteItemId={upVoteItemId}
          upVoteItemTitle={items.find((i) => i.id === upVoteItemId)!!.title}
        />
      )}

      {showRecentVotesModal && (
        <RecentVotesModal
          closeAction={() => {
            setShowRecentVotesModal(false);
          }}
          items={items}
        />
      )}
    </>
  );
};

export default Main;
