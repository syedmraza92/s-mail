"use client";
import { Provider } from "react-redux";
import Body from "./Body/Body";
import Navbar from "./Navbar/Navbar";
import SecondaryNavbar from "./Navbar/SecondaryNavbar";
import ThirdNavbar from "./Navbar/ThirdNavbar";
import NewMail from "./NewEmail.tsx/NewEmail";
import RightSidebar from "./RightSidebar/RightSidebar";
import Sidebar from "./Sidebar/Sidebar";
import { store } from "./state/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <Navbar />

        <div className="flex">
          <Sidebar />
          <div className="flex flex-col w-full">
            <SecondaryNavbar />
            <ThirdNavbar />
            <Body />
          </div>
          <NewMail />
          <div className="flex justify-end">
            <RightSidebar />
          </div>
        </div>
      </main>
    </Provider>
  );
}
