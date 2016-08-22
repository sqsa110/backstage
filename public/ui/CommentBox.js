import React from 'react';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

let CommentBox = React.createClass({
	render() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList />
				<CommentForm />
			</div>
		);
	}
});

export default CommentBox;
