import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  MoreVert,
  Redo,
  Settings,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

function SecondaryNavbar() {
  return (
    <div className="settings navbar border-b border-solid border-[#f5f5f5]">
      <div className="settings flex justify-between sticky top-0 bg-white z-[999]">
        <div className="settingsLeft m-3 ">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="settingsRight m-3">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SecondaryNavbar;
