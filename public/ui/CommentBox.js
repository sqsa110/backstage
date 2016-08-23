import React from 'react';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
import $ from '../bin/jquery.min.js';

let CommentBox = React.createClass({
	getInitialState(){
		return {data:[]};
	},
	loadCommentsFromServer(){
		$.ajax({
			url:this.props.url,
			dataType:'json',
			type:'POST',
			cache:false,
			success:function(data){
				this.setState({data:data});
			}.bind(this),
			error:function(xhr,status,err){
				console.error(this.props.url,status,err.toString());
			}.bind(this)
		});
	},
	handleCommentSubmit(comment){
		var comments = this.state.data;
		var newComments = comments.concat([comment]);
		this.setState({data:newComments});
		$.ajax({
			url:this.props.url,
			dataType:'json',
			type:'POST',
			data:comment,
			success:function(data){
				this.setState({data:data});
			}.bind(this),
			error:function(xhr,status,err){
				console.error(this.props.url,status)
			}.bind(this)
		})
	},
	componentDidMount(){
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer,this.props.pollInterval);
	},
	render() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit}/>
			</div>
		);
	}
});

export default CommentBox;
