import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text)),
        sendMessage: () => dispatch(sendMessageActionCreator())
    }
};
export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);