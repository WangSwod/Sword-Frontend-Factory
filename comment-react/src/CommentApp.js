import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
    constructor() {
        super();
        this.state = { comments: [] };
    }

    componentWillMount() {
        let oldComments = localStorage.getItem('comments');
        console.log('oldComments' + oldComments);
        if (oldComments) {
            oldComments = JSON.parse(oldComments);
            this.setState({ comments: oldComments });
        }
    }

    handleSubmit(data) {
        if (!data) return;
        if (!data.username) return alert('Please enter userName');
        if (!data.content) return alert('Please enter content');

        this.state.comments.push(data);
        console.log(data);
        console.log(this.state.comments);
        this._saveComments(this.state.comments);
        this.setState({ comments: this.state.comments });
    }

    handleDeleteComment(index) {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
        this._saveComments(comments)
    }

    _saveComments(data) {

        localStorage.setItem('comments', JSON.stringify(data));
    }


    render() {
        return (<div className='wrapper'>
            <CommentInput onSubmit={this.handleSubmit.bind(this)} />
            <CommentList comments={this.state.comments}
                onDeleteComment={this.handleDeleteComment.bind(this)} />
        </div>
        )
    }
}

export default CommentApp;