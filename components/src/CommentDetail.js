import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatarImage} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.postTime}</span>
                </div>
                <div className="text">{props.commentText}</div>
            </div>
            <button className="ui primary button">
                Approve
            </button>
            <button className="ui button">
                Reject
            </button>
            
        </div>
    );
};

export default CommentDetail;