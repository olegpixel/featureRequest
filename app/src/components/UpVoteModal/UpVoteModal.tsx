import { useState } from "react";
import InputField from "../InputField/InputField";

type UpVoteModalProps = {
  closeAction: () => void;
  voteAction: (nearAmount: number) => void;
  upVoteItemId: string;
  upVoteItemTitle: string;
};

const AddItemModal = ({
  closeAction,
  voteAction,
  upVoteItemId,
  upVoteItemTitle,
}: UpVoteModalProps) => {
  const [nearAmount, setNearAmount] = useState(0);

  const validateForm = () => {
    return nearAmount > 0;
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={closeAction}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <h4 className="text-lg font-medium text-gray-800">
              Vote for "{upVoteItemTitle}"
            </h4>
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
            <form>
              <div className="form-group mb-6">
                <div className="text-left mb-2">Near amount:</div>
                <InputField
                  value={nearAmount}
                  onChange={(n) => setNearAmount(Number(n))}
                  placeholder={"NEAR amount"}
                  type={"number"}
                />
              </div>
            </form>
          </div>
          <div className="flex items-center gap-3 p-4 mt-5 border-t">
            <button
              className="px-6 py-2 text-white bg-pink-600 rounded-md outline-none ring-offset-2 ring-pink-600 focus:ring-2 disabled:bg-pink-300"
              onClick={() => voteAction(nearAmount)}
              disabled={!validateForm()}
            >
              Vote
            </button>
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

export default AddItemModal;
