import React from 'react';

class ProfileStatus extends React.Component{
    state={
        editMode:false,
        status:this.props.status
    }

    activateEditMode=()=>{
        //console.log('this:',this)
        this.setState({
            editMode:true
        })
        //this.forceUpdate() - костыль намекающий на перерисовку объекта
    }
    deactivateEditMode=()=>{
        this.setState({
            editMode:false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange=(e)=>{
        this.setState({
            status:e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.status!==this.state.status){
            this.setState({
                state:this.state.status
            })
        }
        //console.log('componentDidUpdate ProfileStatus')
    }

    render() {
        //console.log('render ProfileStatus')
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status|| 'Write your status'}</span>
                    </div>
                }
                {this.state.editMode &&
                        <div>
                            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status}/>
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus