import "./sidebar.css";
import SidebarLink from "./SidebarLink";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import HelpIcon from '@mui/icons-material/Help';
import EventIcon from '@mui/icons-material/Event';
import DangerousIcon from '@mui/icons-material/Dangerous';
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
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
        {/* <SidebarLink text="Lists" Icon={ListAltIcon} /> */}
        {/* <SidebarLink text="Profile" Icon={PermIdentityIcon} /> */}
        <Button id="post-btn"> Create Post</Button>
    </div>
  );
}

export default Sidebar;