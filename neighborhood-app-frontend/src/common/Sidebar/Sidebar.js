import "./sidebar.css";
import SidebarLink from "./SidebarLink";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import HelpIcon from '@mui/icons-material/Help';
import EventIcon from '@mui/icons-material/Event';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { Button } from "@mui/material";


function Sidebar(){
  return(
    <div className="sidebar">
        <SidebarLink text="Home" Icon={HomeIcon} />
        <SidebarLink text="Lost/Found" Icon={SearchIcon} />
        <SidebarLink text="Events" Icon={EventIcon} />
        <SidebarLink text="Ask for help" Icon={HelpIcon} />
        <SidebarLink text="Suspicious Activities" Icon={DangerousIcon} />
        <SidebarLink text="General" Icon={BookmarkBorderIcon} />
        <Button id="post-btn"> Create Post</Button>
    </div>
  );
}

export default Sidebar;