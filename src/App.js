import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import store from "./redux/State";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sideBar={props.state.sideBar}/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs" render={() => <Dialogs dialogPage={props.state.dialogPage}
                                                              dispatch={props.dispatch}/>}/>
                <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}
                                                              dispatch={props.dispatch}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;