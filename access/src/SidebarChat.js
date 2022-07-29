import { Avatar, createChainedFunction, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './SidebarChat.css';

function SidebarChat({ addNewChat }) {

    const [randomSeed, setRandomSeed] = useState('');

    // Here when a component loads we get a random seed which will load a random avatar in the avatar tag
    useEffect(() => {
        setRandomSeed(Math.floor(Math.random() * 5000))
    }, [])


    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if (roomName) {

        }
    };


    return !addNewChat ? ( <
            div className = 'sidebarChat' >
            <
            Avatar src = { `https://avatars.dicebear.com/api/human/${randomSeed}.svg` }
            />

            <
            div className = 'sidebarChat__info' >
            <
            h2 > CS 2024 < /h2> <
            p > Last Message.... < /p> <
            /div> <
            /div>
        ) :
        ( <
            div onClick = { createChat }
            className = "sidebarChat" >
            <
            IconButton >
            <
            AddCircleOutlineIcon className = 'button' / >
            <
            /IconButton> <
            /div>     
        )
}

export default SidebarChat