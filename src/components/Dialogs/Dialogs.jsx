import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let dialogsElements = props.dialogPage.dialogs.map((dialog) => <DialogItem key={dialog.id} name={dialog.name}
                                                                                     id={dialog.id}/>);
    let messageElements = props.dialogPage.messages.map(message => <Message key={message.id} message={message}/>);

    let sendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = (e) => {
        let text = e.currentTarget.value;
        props.updateNewMessageText(text);
    };


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div className={style.sendedMessages}>
                    {messageElements}
                </div>
                <div className={style.newMessage}>
                    <textarea onChange={onMessageChange} value={props.dialogPage.newMessageText} placeholder={"Your message"}/>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;