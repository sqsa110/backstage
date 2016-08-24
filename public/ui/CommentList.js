import React from 'react';
import Comment from './Comment.js';

let CommentList = React.createClass({

	render(){
		var commentNodes = this.props.data.map(function(comment){
			return (
				<Comment key={comment.author} author={comment.author}>
					{comment.text}
				</Comment>
			);
		});

		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});

export default CommentList;
