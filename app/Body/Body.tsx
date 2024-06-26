"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Close,
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import { fetchEmailsSuccess, openEmail, Email } from "../GlobalRedux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { rawData } from "./EmailData";

function Body() {
  const dispatch = useDispatch();
  const { emails, openedEmailIndex } = useSelector(
    (state: RootState) => state.emails
  );

  useEffect(() => {
    dispatch(fetchEmailsSuccess(rawData));
  }, [dispatch]);

  const handleEmailClick = (index: number) => {
    dispatch(openEmail(index));
  };

  const handleCloseButtonClick = () => {
    dispatch(openEmail(null));
  };
  return (
    <>
      <div style={{ position: "relative" }}>
        {emails.map((email, index) => (
          <div
            key={index}
            className="flex bg-white items-center h-12 border-b border-solid border-[#f5f5f5] cursor-pointer hover:border-t hover:border-solid hover:border-[#f5f5f5] hover:shadow-lg  hover:bg-gray-200"
            onClick={() => handleEmailClick(index)}
          >
            <div className="flex m-3 justify-between items-center">
              <Checkbox />
              <IconButton>
                <StarBorderOutlined />
              </IconButton>
              <IconButton>
                <LabelImportantOutlined />
              </IconButton>
            </div>

            <h3 className="font-semibold flex w-1/4 overflow-hidden whitespace-nowrap">
              {email.subject}
            </h3>
            <div className="w-full flex justify-start whitespace-nowrap overflow-hidden text-ellipsis pr-1 pl-1">
              <h4 className="p-3 font-semibold whitespace-nowrap overflow-hidden capitalize">
                {email.to}
                <span className="px-4 font-light text-gray-500">-</span>
                <span className="font-normal text-gray-500">{email.body}</span>
              </h4>
            </div>

            <div className="px-4 font-semibold flex justify-end w-1/4">
              {email.time}
            </div>
          </div>
        ))}

        {openedEmailIndex !== null && (
          <div
            className="absolute inset-0 bg-white p-4"
            style={{ zIndex: 999 }}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="capitalize">
                <span className="font-bold">To:</span>{" "}
                {emails[openedEmailIndex].to}
              </p>
              <button onClick={handleCloseButtonClick}>
                <Close />
              </button>
            </div>
            <div className="flex items-center justify-between pb-5">
              <h2 className="font-bold text-xl">
                {emails[openedEmailIndex].subject}
              </h2>
              <p>Sent at: {emails[openedEmailIndex].time}</p>
            </div>

            <p>{emails[openedEmailIndex].body}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Body;
