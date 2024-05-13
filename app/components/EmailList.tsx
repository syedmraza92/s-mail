const TopBarData = [
  {
    logo: "/assets/inbox.svg",
    title: "Primary",
  },
  {
    logo: "/assets/promo.svg",
    title: "Promotional",
  },
  {
    logo: "/assets/social.svg",
    title: "Social",
  },
];

interface TopBarProps {
  logo: string;
  title: string;
}

const TopBar = ({ logo, title }: TopBarProps) => {
  return (
    <div className="bg-white w-full h-16 border-b-4 hover:border-b-blue-500 shadow p-3 flex items-center gap-2">
      <img src={logo} alt="inbox" className="w-6" />
      <h2 className="hidden sm:flex font-semibold">{title}</h2>
    </div>
  );
};
const EmailList = () => {
  return (
    <div className="flex w-full overflow-hidden">
      {TopBarData.map((topbar, index) => (
        <TopBar key={index} {...topbar} />
      ))}
    </div>
  );
};
export default EmailList;
