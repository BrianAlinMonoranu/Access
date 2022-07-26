import React from "react";
import "./Sidebar.css";
import MessageIcon from "@mui/icons-material/Message";
import FaceIcon from "@mui/icons-material/Face";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import PersonIcon from "@mui/icons-material/Person";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Icon, IconButton } from "@mui/material";

function Sidebar() {
    return ( <
        div className = "sidebar" >
        <
        div className = "sidebar__header" >
        <
        PersonIcon / >

        <
        div className = "sidebar__headerRight" >
        <
        IconButton >
        <
        MessageIcon className = "adjust" / >
        <
        /IconButton> <
        IconButton >
        <
        AutorenewIcon className = "adjust" / >
        <
        /IconButton> <
        IconButton >
        <
        ExpandCircleDownIcon className = "adjust" / >
        <
        /IconButton> <
        /div> <
        /div>

        <
        div className = "sidebar__search" > < /div>

        <
        div className = "sidebare__chats" > < /div> <
        /div>
    );
}

export default Sidebar;