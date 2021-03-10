import React from 'react'
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarOptions from './SidebarOptions'
import AddIcon from "@material-ui/icons/Add";
import { auth, db } from '../firebase';
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';


function Sidebar() {
    const [channels] = useCollection (db.collection("rooms"));
    const [user] = useAuthState(auth);



    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Grind HQ</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        Jamil Kelley
                    </h3>
                </SidebarInfo>
                <CreateIcon/>
            </SidebarHeader>
                <SidebarOptions Icon={InsertCommentIcon} title="Threads"/>
                <SidebarOptions Icon={InboxIcon} title="Mentions & reactions"/>
                <SidebarOptions Icon={DraftsIcon} title="Saved Items"/>
                <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser"/>
                <SidebarOptions Icon={PeopleAltIcon} title="People & user groups"/>
                <SidebarOptions Icon={AppsIcon} title="Apps"/>
                <SidebarOptions Icon={FileCopyIcon} title="File browser"/>
                <SidebarOptions Icon={ExpandLessIcon} title="Show less"/>

                <hr/>
                <SidebarOptions Icon={ExpandMoreIcon} title="Channels"/>
                <hr/>
                <SidebarOptions Icon={AddIcon} addChannelOption title="Add Channel"/>

                {channels?.docs.map(doc => (
                    <SidebarOptions 
                    key={doc.id} 
                    id={doc.id}  
                    title={doc.data().name} />
                ))}
        </SidebarContainer>
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
background-color: var(--slack-color);
color: white;
flex: 0.3;
border-top: 1px solid white;
max-width: 260px;
margin-top: 60px;

>hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid whitesmoke;
}
`


const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid white;
padding: 13px;

> .MuiSvgIcon-root {
    padding: 8px; 
    font-size: 14px;
    background-color: white;
    border-radius: 999px;
}
`

const SidebarInfo = styled.div`
flex: 1;

>h2 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
}

>h3 {
    display:flex;
    font-size: 14px;
    font-weight:500;
    align-items: center;

}

>h3 > .MuiSvgIcon-root {
    font-size: 14px;
    color: green;
    margin-top: 1px;
    margin-right: 3px;
}
`