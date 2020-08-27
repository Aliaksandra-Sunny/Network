import React from 'react';
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };
    activateEditMode = () => {
        return this.setState({editMode: true})
    };
    deactivateEditMode = () => {
        return this.setState({editMode: false}, ()=>{this.props.updateStatus(this.state.status)})
    };
    onStatusChange = (e)=>{
        return this.setState({status:e.currentTarget.value})
    };

    render() {
        return (<div>
                {!this.state.editMode ? <div onDoubleClick={this.activateEditMode}>
                        <span>
                          {this.props.status}
                         </span>
                    </div> :
                    <div  >
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;