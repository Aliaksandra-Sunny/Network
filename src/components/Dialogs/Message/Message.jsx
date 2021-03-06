import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={s.message + ' ' + [(props.message.user === 0) ? s.another : s.you]}>
            {
                (props.message.user === 0) ?
                    <>
                        <img
                            src="https://avatars.mds.yandex.net/get-pdb/1604805/2cf986d5-97ae-479b-83ab-2f34731c1515/s1200"/>
                        {props.message.message}
                    </>
                    :
                    <>
                        {props.message.message}
                        <img src='https://ololo.tv/wp-content/uploads/2019/05/parrot-eyes11.jpg'/>
                    </>
            }
        </div>
    )
};


export default Message;