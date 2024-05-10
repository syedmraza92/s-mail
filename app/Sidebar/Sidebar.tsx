import ComposeButton from "../components/ComposeButton";
import Mailtags from "../components/Mailtags";

function Sidebar() {
  return (
    <div className="h-screen bg-gray-100 w-48 flex flex-col">
      <ComposeButton />
      <Mailtags />
    </div>
  );
}

export default Sidebar;
