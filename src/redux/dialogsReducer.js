const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState={
    dialogs: [
        {id: 1, name: 'Tolya'},
        {id: 2, name: 'Tanya'},
        {id: 3, name: 'Nastya'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Sasha'},
    ],
    messages: [
        {id: 1, message: 'Hi!', user: 1},
        {id: 2, message: 'Hello. Nice to see you!', user: 0},
        {id: 3, message: 'You make me smile:)', user: 1},
        {id: 4, message: 'It is pleasure for me!', user: 0},
    ],
    newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:{
            let stateCopy={...state};
            stateCopy.messages=[...state.messages];
            stateCopy.messages.push({id: 4, message: state.newMessageText, user: 0});
            stateCopy.newMessageText = "";
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT:{
            let stateCopy={...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }

        default: return state;
    }
};

export const sendMessageActionCreator=()=>{
    return {type: SEND_MESSAGE}
};
export const updateNewMessageTextActionCreator=(text)=>{
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
};

export default dialogsReducer;