import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile, setStatus, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.setProfile(userId);
        this.props.setStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} updateStatus={this.props.updateStatus} status={this.props.status} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
    }
};


export default compose( connect(mapStateToProps, {
    setProfile, setStatus, updateStatus
}), withRouter,withAuthRedirect)(ProfileContainer);