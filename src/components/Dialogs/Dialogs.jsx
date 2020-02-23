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
    let dialogsData=[
        {id: 1, name: 'Tolya'},
        {id: 2, name: 'Tanya'},
        {id: 3, name: 'Nastya'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Sasha'},
    ];
    let messageData=[
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello. Nice to see you!'},
        {id: 3, message: 'You make me smile:)'},
        {id: 4, message: 'It is pleasure for me!'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>

            </div>
        </div>
    )
}

export default Dialogs;