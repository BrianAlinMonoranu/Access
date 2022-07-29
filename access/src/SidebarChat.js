import { Avatar, createChainedFunction, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './SidebarChat.css';
import db from './firebase';

function SidebarChat({ id, name, addNewChat }) {

    const [randomSeed, setRandomSeed] = useState('');

    // Here when a component loads we get a random seed which will load a random avatar in the avatar tag
    useEffect(() => {
        setRandomSeed(Math.floor(Math.random() * 5000))
    }, [])


    const createChat = () => {
        const roomName = prompt("Please enter name for chat room");

        if (roomName) {

            db.collection('rooms').add({
                name: roomName,
            })
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
            h2 > { name } < /h2> <
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