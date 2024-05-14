"use client"
import { useDispatch, useSelector } from "react-redux";
import { openNewMail } from "../state/action-creators";
import NewMail from "../NewEmail.tsx/NewEmail";
import { useState } from "react";

function ComposeButton() {
  const [isComposeClicked, setIsComposeClicked] = useState(false);
  const dispatch = useDispatch();
  const newMailIsOpen = useSelector((state: any) => state.newMail && state.newMail.isOpen);

  const handleComposeClick = () => {
    dispatch(openNewMail()); 
    setIsComposeClicked(true); 
  };
  
  return (
    <div className="">
      <button onClick={handleComposeClick} className="p-4 bg-blue-300 rounded-xl flex items-center justify-center gap-3 text-sm hover:ring-1 hover:border m-4">
        <img src="/assets/pencil.svg" alt="pencil" />
        Compose
      </button>
      {isComposeClicked && <NewMail />} 
    </div>
  );
}

export default ComposeButton;
