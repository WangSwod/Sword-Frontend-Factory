import React, { Component } from 'react';

class CommentInput extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }


    handleClick(){
        if(this.props.onSubmit){

            let {username , content} = this.state;
            this.props.onSubmit({username,content})
        }

        this.setState({content:''});
    }

    handleUserNameInput(e){
        this.setState({username:e.target.value});
    }

    handleConentInput(e){
        this.setState({content:e.target.value});
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>User:</span>
                    <div className='comment-field-input'>
                        <input type="text"  value = {this.state.username} onChange ={this.handleUserNameInput.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>Comment:</span>
                    <div className='comment-field-input'>
                        <textarea  cols="30" rows="10" value = {this.state.content} onChange={this.handleConentInput.bind(this)}></textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick = {this.handleClick.bind(this)}>Submit</button>
                </div>

            </div>
        );
    }
}

export default CommentInput;