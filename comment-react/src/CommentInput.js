import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {

    static propTypes = {
        onSubmit :PropTypes.func,
    }
    

    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }

    componentWillMount(){

        let oldName = localStorage.getItem('username');
        if(oldName) {
            this.setState({username:localStorage.getItem('username')});
        }
    }

    componentDidMount(){
        this.refs.commentInput.focus();
    }
    handleClick(){
        if(this.props.onSubmit){

            let {username , content} = this.state;
            this.props.onSubmit({username,content , createdTime: +new Date()})
        }

        this.setState({content:''});
    }

    handleUserNameInput(e){
        this.setState({username:e.target.value});
    }

    handleConentInput(e){
        this.setState({content:e.target.value});
    }

    handleUserNameBlur(e){

        this._saveUserName(e.target.value);
    }

    _saveUserName(value){
        localStorage.setItem('username',value);
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>User:</span>
                    <div className='comment-field-input'>
                        <input type="text"  value = {this.state.username} 
                            onBlur = {this.handleUserNameBlur.bind(this)}
                            onChange ={this.handleUserNameInput.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>Comment:</span>
                    <div className='comment-field-input'>
                        <textarea  ref = 'commentInput' cols="30" rows="10" value = {this.state.content} onChange={this.handleConentInput.bind(this)}></textarea>
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