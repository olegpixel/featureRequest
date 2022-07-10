import { useState, useEffect } from "react";
import { getReacentVotes } from "../../utils/calls";
import { ItemType } from "../../utils/types";
import { formatNearAmount } from "near-api-js/lib/utils/format";
import Loading from "../Loading/Loading";

type UpVoteModalProps = {
  closeAction: () => void;
  items: ItemType[];
};

type Vote = {
  title: string;
  dateTime: string;
  amount: string;
};

const RecentVotesModal = ({ closeAction, items }: UpVoteModalProps) => {
  const [loading, setLoading] = useState(true);
  const [votesList, setVotesList] = useState<Vote[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getReacentVotes();
      resp.sort((a: any, b: any) => b.timestamp - a.timestamp);
      const votes: Vote[] = resp.map((v: any) => {
        return {
          title: items.find((i) => i.id === v.itemId)!!.title,
          dateTime: new Date(v.timestamp / 1000000).toLocaleString(),
          amount: `${formatNearAmount(v.balance)} NEAR`,
        };
      });
      setVotesList(votes);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={closeAction}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <h4 className="text-lg font-medium text-gray-800">Recent Votes</h4>
            <button
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={closeAction}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
            {loading && <Loading />}
            {!loading && (
              <table className="w-full text-sm text-left text-indigo-900">
                <thead className="text-xs text-indigo-900 uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      NEAR
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {votesList.map((v) => {
                    return (
                      <tr className="border-b text-indigo-900 odd:bg-white even:bg-gray-50">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-indigo-900"
                        >
                          {v.title}
                        </th>
                        <td className="px-6 py-4">{v.dateTime}</td>
                        <td className="px-6 py-4">{v.amount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
          <div className="flex items-center gap-3 p-4 mt-5 border-t">
            <button
              className="px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
              onClick={closeAction}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentVotesModal;
