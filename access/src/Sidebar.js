import React from "react";
import "./Sidebar.css";
import MessageIcon from "@mui/icons-material/Message";
import FaceIcon from "@mui/icons-material/Face";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Avatar, Icon, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from "./SidebarChat";


function Sidebar() {
<<<<<<< HEAD
    return ( <
        div className = "sidebar" >
        <
        div className = "sidebar__header" >
        <
        Avatar / >
=======
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <PersonIcon />
>>>>>>> 3e1afd809547ba61c0caf8f2fd19081f7f56fbce

        <div className="sidebar__headerRight">
          <IconButton>
            <MessageIcon className="adjust" />
          </IconButton>
          <IconButton>
            <AutorenewIcon className="adjust" />
          </IconButton>
          <IconButton>
            <ExpandCircleDownIcon className="adjust" />
          </IconButton>
        </div>
      </div>

<<<<<<< HEAD
        <
        div className = "sidebar__search" >
        <
        div className = "sidebar__searchContainer" >
        <
        SearchIcon / >
        <
        input placeholder = "Search for a person"
        type = "text" / >
        <
        /div> <
        /div>

        <
        div className = "sidebar__chats" >
        <
        SidebarChat addNewChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        /div> <
        /div>
    );
=======
      <div className="sidebar__search"></div>

      <div className="sidebare__chats"></div>
    </div>
  );
>>>>>>> 3e1afd809547ba61c0caf8f2fd19081f7f56fbce
}

export default Sidebar;
