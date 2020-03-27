import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return <StoreContext.Consumer>{
        (store) => {
            let state = store.getState().dialogPage;
            let sendMessage = () => {
                store.dispatch(sendMessageActionCreator());
            };
            let onMessageChange = (text) => {
                store.dispatch(updateNewMessageTextActionCreator(text));
            };

            return <Dialogs dialogPage={state} updateNewMessageText={onMessageChange} sendMessage={sendMessage}/>
        }
    }
    </StoreContext.Consumer>
};

export default DialogsContainer;