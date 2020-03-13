const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            state.messages.push({id: 4, message: state.newMessageText, user: 0});
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
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