import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from "@material-ui/core";
import {db} from "../firebase";
import firebase from 'firebase';

function ChatInput({channelName, channelId}) {

    const [input, setInput] = useState("");

    const sendMessage = (e) => {

        e.preventDefault(); //Prevents refresh

        if (channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Jamil Kelley',
            userImage:'https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/18953256_10105960431464600_5708052005609415804_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7Wqg5hY3ZJAAX_ebaQI&_nc_ht=scontent-dfw5-2.xx&oh=bc5f936cb82a2cd66f92c10a1b5f1409&oe=606FD57F',
        });

        setInput('');
  
    };




    return (
        <ChatInputContainer>
            <form>
                <input value={input}
                onChange={(e) => setInput(e.target.value)} placeholder={`Message #ROOM`} />
                <Button hidden type='submit' onClick={sendMessage}></Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput;

const ChatInputContainer = styled.div`
border-radius: 20px;

>form {
    position: relative;
    display:flex;
    justify-content: center;
}

>form >input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius:3px;
    padding: 20px;
    outline: none;
}

>form > button {
    display: none !important;
}
`;


