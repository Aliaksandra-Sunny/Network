import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message=(props)=>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Tolya" id="1"/>
                <DialogItem name="Tanya" id="2"/>
                <DialogItem name="Nastya" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Stas" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="Hello. Nice to see you!"/>
                <Message message="You make me smile:)"/>
                <Message message="It is pleasure for me!"/>
            </div>
        </div>
    )
}

export default Dialogs;