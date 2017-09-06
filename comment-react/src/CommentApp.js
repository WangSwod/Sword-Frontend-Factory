import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
    constructor(){
        super();
        this.state = {comments:[]};
    }
    handleSubmit(data){
        let newComments = this.state.comments.push(data);
        this.setState({newComments});
    }
    

    render() {
        return (<div className = 'wrapper'>
            <CommentInput onSubmit = {this.handleSubmit.bind(this)} />
            <CommentList comments = {this.state.comments}/>
        </div>
        )
    }
}

export default CommentApp;