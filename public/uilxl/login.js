var LoginBox = React.createClass({
	render : function(){
		return (
			<div className="modal in fade bs-example-modal-lg show">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<button className="close" data-dismiss="modal"><span>&times;</span></button>
							<h4 className="modal-title">Modal title</h4>
						</div>
						<div className="modal-body">
							<p>One fine body&hellip;</p>
						</div>
						<div className="modal-footer">
							<button className="btn btn-default" data-dismiss="modal">Close</button>
							<button className="btn btn-primary">Save change</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

ReactDOM.render(
	<LoginBox />,
	document.getElementById('LoginBox')
);