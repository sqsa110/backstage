import React from 'react';

var LoginHeader = React.createClass({
  render:function(){
    return (
      <div className="modal-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6">登陆</div>
            <div className="col-xs-6">快速注册</div>
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

var LoginUser = React.createClass({
  render:function(){
    return (
      <div className="form-group">
        <label htmlFor="username">用户名:</label>
        <input type="text" className="form-control" id="username" placeholder="用户名" />
      </div>
    )
  }
});

var LoginPw = React.createClass({
  render:function(){
    return (
      <div className="form-group">
        <label htmlFor="password">密码:</label>
        <input type="password" className="form-control" id="password" placeholder="密码" />  
      </div>
    )
  }
});

var LoginBody = React.createClass({
  render:function(){
    return (
      <div className="modal-body">
        <form>
          <div className="container-fluid">
              <LoginUser />
              <LoginPw />
          </div>
        </form>
      </div>
    )
  }
});

var LoginFooter = React.createClass({
  render:function(){
    return (
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
        <button type="button" className="btn btn-primary">登陆</button>
      </div>
    )
  }
});

var LoginBox = React.createClass({
  render: function() {
    return (
      <div className="modal fade login show in" id="loginModal" htmlTabindex="-1">
        <link href="ui/login/login.css" rel="stylesheet" />
        <div className="modal-dialog">
          <div className="modal-content">
            <LoginHeader />
            <LoginBody />
            <LoginFooter />
          </div>
        </div>
      </div>
    );
  }
});

export default LoginBox;
