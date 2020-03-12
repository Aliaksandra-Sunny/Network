import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/State";

const Dialogs = (props) => {
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