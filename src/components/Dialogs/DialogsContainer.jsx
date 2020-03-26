import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogPage;
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    };
    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (<Dialogs dialogPage={state} updateNewMessageText={onMessageChange} sendMessage={sendMessage}/>);

};

export default DialogsContainer;