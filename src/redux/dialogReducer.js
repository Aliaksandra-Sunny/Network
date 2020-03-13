const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogReducer = (state, action) => {
    if (action.type === SEND_MESSAGE) {
        state.messages.push({id: 4, message: state.newMessageText, user: 0});
        state.newMessageText = "";
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
    }
    return state;
}