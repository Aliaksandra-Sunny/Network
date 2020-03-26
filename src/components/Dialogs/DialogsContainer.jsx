import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogPage;

    let dialogsElements = props.dialogPage.dialogs.map((dialog) => <DialogItem name={dialog.name}
                                                                                     id={dialog.id}/>);
    let messageElements = props.dialogPage.messages.map(message => <Message message={message}/>);

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    };

    let onMessageChange = (e) => {
        let text = e.currentTarget.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <div className={style.dialogs}>
            <Dialogs/>
        </div>
    )
};

export default DialogsContainer;