import React from 'react';
import ReactDOM from 'react-dom';

class Box extends React.Component({
    render(){
      return (
        <div className="modal-header">
          <div className="container-fluid">
            <div className="row title">
              <div className="col-xs-6"><a href="javascript:;">登陆</a></div>
              <div className="col-xs-6"><a href="javascript:;">快速注册</a></div>
            </div>
            <div className="row dash">
              <div className="col-xs-2"></div>
              <div className="col-xs-2 line"></div>
              <div className="col-xs-2"></div>
              <div className="col-xs-2"></div>
              <div className="col-xs-2 line"></div>
              <div className="col-xs-2"></div>
            </div>
          </div>
        </div>
      )
    }
});

ReactDOM.render(
	<Box />,
	document.getElementById('login')
);
