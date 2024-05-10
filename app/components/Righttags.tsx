const SideBarData = [
    {
      logo: "/assets/calender.svg",

    },
    {
      logo: "/assets/bulb.svg",

    },
    {
      logo: "/assets/tasks.svg",

    },
    {
      logo: "/assets/contacts.svg",

    },
    {
      logo: "/assets/plus.svg",

    },
  ];
  
  interface RightSideBarProps {
    logo: string;
  }
  
  const RightSideBar = ({ logo }: RightSideBarProps) => {
    return (
        <div className="flex hover:bg-gray-300 rounded-full w-full justify-center p-5">
        <img src={logo} alt="inbox" className="" />
      </div>
    );
  };
  const Righttags = () => {
    const listOfRightSideBar = SideBarData.map((rightsidebar) => <RightSideBar {...rightsidebar} />);
    return <div>{listOfRightSideBar}</div>;
  };
  
  export default Righttags;
  