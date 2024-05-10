import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { closeNewMail } from "../state/action-creators";

const NewMail = () => {
  const dispatch = useDispatch();
  const newMailIsOpen = useSelector(
    (state: { newMail: { isOpen: boolean } }) => state.newMail.isOpen
  );

  const handleCloseClick = () => {
    dispatch(closeNewMail());
  };

  if (!newMailIsOpen) return null;

  return (
    <div className="fixed bottom-0 right-[80px] bg-[#404040] w-[40%] h-[40%] max-w-[500px] rounded-t-lg flex flex-col shadow-lg">
      <div className="p-3 flex justify-between items-center text-gray-500">
        <h3 className="text-white text-sm">New Message</h3>
        <CloseIcon
          onClick={handleCloseClick}
          className="hover:cursor-pointer"
        />
      </div>
      <form className="flex flex-col ">
        <input className="border-b-2 h-12 p-3" type="text" placeholder="To" />
        <input
          className="border-b-2 h-12 p-3"
          type="text"
          placeholder="Subject"
        />
        <input
          className="border-b-2 h-56 p-3 "
          type="text"
          placeholder="Message..."
        />

        <div>
          <button className="bg-[#3079ed] m-6 px-5 py-2 rounded-md text-white">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewMail;
