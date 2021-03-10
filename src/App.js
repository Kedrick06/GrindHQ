import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Components/Header';
import styled from "styled-components";
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import Login from './Components/Login';
import Spinner from "react-spinkit";

function App() {

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
            <img src="https://i.ibb.co/W0m8XsF/bfblk-buffalo.png" alt=""/>
          <Spinner
          name="ball-spin-fade-loader"
          color="blue"
          fadeIn="none"
          />
        </AppLoadingContent>
      </AppLoading>
    )
  }

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login/>

        ):(
          <>
          <Header/>
          <AppBody>
            <Sidebar/>
            <Switch>
               <Route path="/" exact>
                <Chat/>
               </Route>
            </Switch>
            </AppBody>
            </>
        )}
       
         
    </Router>
    </div>
  );
}

export default App;



const AppBody = styled.div`
display: flex;
height: 100vh;
`

const AppLoading = styled.div`
display: grid;
place-items: center;
height: 100vh;
width:100%;
`

const AppLoadingContent = styled.div`
text-align: center;
display: flex;
justify-content: center;
padding-bottom: 100px;
align-items: center;
flex-direction: column;

>img {
  height: 100px;
  padding:20px;
  margin-bottom: 40px;

}
`