import React, { Component } from 'react';
import Comment from './Comment';

class ComponentList extends Component {


    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }
    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment comment={comment} key={i} index={i}  onDeleteComment={this.handleDeleteComment.bind(this)}/>)}
            </div>
        );
    }
}

export default ComponentList;