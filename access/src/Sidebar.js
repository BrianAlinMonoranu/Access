import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import MessageIcon from "@mui/icons-material/Message";
import FaceIcon from "@mui/icons-material/Face";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Avatar, Icon, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from "./SidebarChat";
import db from "./firebase";


function Sidebar() {

    const [chats, setChats] = useState([]);

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    data: doc.data(),

                })))
        ))
    }, [])

    { console.log(chats) }
    return ( <
        div className = "sidebar" >
        <
        div className = "sidebar__header" >
        <
        Avatar / >

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
        SidebarChat addNewChat / > {
            chats.map(room => ( <
                SidebarChat key = { room.id }
                id = { room.id }
                name = { room.data.name }
                />
            ))
        } <
        /div> <
        /div>
    );
}

export default Sidebar;