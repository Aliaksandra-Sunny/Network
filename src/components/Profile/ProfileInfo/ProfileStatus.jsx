import React from 'react';
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,

    };
    changeEditMode = () => {
        return this.setState({editMode: !this.state.editMode})
    };

    render() {
        return (<div>
                {!this.state.editMode ? <div onDoubleClick={this.changeEditMode}>
                        <span>
                          {this.props.status}
                         </span>
                    </div> :
                    <div  >
                        <input autoFocus={true} onBlur={this.changeEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;