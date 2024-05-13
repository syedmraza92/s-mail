const SideBarData = [
  {
    logo: "/assets/inbox.svg",
    title: "Inbox",
  },
  {
    logo: "/assets/star.svg",
    title: "Starred",
  },
  {
    logo: "/assets/clock.svg",
    title: "Snoozed",
  },
  {
    logo: "/assets/sent.svg",
    title: "Sent",
  },
  {
    logo: "/assets/draft.svg",
    title: "Drafts",
  },
  {
    logo: "/assets/more.svg",
    title: "More",
  },
];

interface SideBarProps {
  logo: string;
  title: string;
}

const SideBar = ({ logo, title }: SideBarProps) => {
  return (
    <div className="flex hover:bg-gray-300 rounded-r-full gap-3 w-full p-2">
      <img src={logo} alt="inbox" className="w-6" />
      <h2>{title}</h2>
    </div>
  );
};
const Mailtags = () => {
  const listOfSideBar = SideBarData.map((sidebar, index) => (
    <SideBar key={index} {...sidebar} />
  ));
  return <div>{listOfSideBar}</div>;
};

export default Mailtags;
