import { Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import "./Chat.css";

function Chat() {
    const [randomSeed, setRandomSeed] = useState("");
    const [userInput, setUserInput] = useState("");

    // Here when a component loads we get a random seed which will load a random avatar in the avatar tag
    useEffect(() => {
        setRandomSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();

        console.log("You typed ", userInput);

        setUserInput('');
    };

    return ( <
        div className = "chat" >
        <
        div className = "chat__header" >
        <
        Avatar src = { `https://avatars.dicebear.com/api/human/${randomSeed}.svg` }
        /> <
        div className = "chat__headerInfo" >
        <
        h3 > Room Name < /h3> <
        p > Last seen at.... < /p> <
        /div>

        <
        div className = "chat__headerRight" >
        <
        IconButton >
        <
        SearchIcon / >
        <
        /IconButton> <
        IconButton >
        <
        AttachFileIcon / >
        <
        /IconButton> <
        IconButton >
        <
        MoreVertIcon / >
        <
        /IconButton> <
        /div> <
        /div>

        <
        div className = "chat__body" >
        <
        p className = { `chat__message ${true && "chat__receiver"}` } >
        <
        span className = "chat__name" > Brian < /span>
        Hey guys <
        span className = "chat__timestamp" > 12: 05 < /span> <
        /p> <
        p className = "chat__message" > Hey guys < /p> <
        /div>

        <
        div className = "chat__footer" >
        <
        EmojiEmotionsIcon / >
        <
        form >
        <
        input value = { userInput }
        onChange = {
            (e) => setUserInput(e.target.value) }
        type = "text"
        placeholder = "Type a message" /
        >

        <
        button onClick = { sendMessage }
        type = "submit" >
        Send <
        /button> <
        /form>

        <
        SendIcon / >
        <
        /div> <
        /div>
    );
}

export default Chat;