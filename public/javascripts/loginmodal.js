import React from 'react';
import { Modal, Button } from 'antd';
import Login from './login.js';
import Register from './register.js';

const ButtonGroup = Button.Group;

const LoginModal = React.createClass({
  getInitialState() {
    return {
      loading: false,
      LoginVisible : false,
      RegisterVisible : false
    };
  },
  showLoginModal() {
    this.setState({
      LoginVisible: true,
    });
  },
  showRegisterModal() {
    this.setState({
      RegisterVisible: true,
    });
  },
  LoginHandleOk() {

    this.setState({ loading: true });
    var data = {};
    this.refs.login.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      data = $.extend(data,values);
    });

    data.email = $.strEncode(data.email);
    data.passwd = $.strEncode(data.passwd);
    console.log(data);

    $.ajax({
      url: './login',
      type: 'POST',
      dataType: 'json',
      data: data
    })
    .done(function() {
      console.log("success");
      this.setState({ loading: false, LoginVisible: false });
    }.bind(this))
    .fail(function() {
      console.log("error");
      this.setState({ loading: false });
    })
    .always(function() {
      console.log("complete");
    });
        
  },
  RegisterHandleOk() {

    this.setState({ loading: true });
    var data = {};
    this.refs.login.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      data = $.extend(data,values);
    });

    data.email = $.strEncode(data.email);
    data.passwd = $.strEncode(data.passwd);
    console.log(data);

    $.ajax({
      url: './register',
      type: 'POST',
      dataType: 'json',
      data: data
    })
    .done(function() {
      console.log("success");
      this.setState({ loading: false, RegisterVisible: false });
    }.bind(this))
    .fail(function() {
      console.log("error");
      this.setState({ loading: false });
    })
    .always(function() {
      console.log("complete");
    });
        
  },
  LoginHandleCancel() {
    this.refs.login.resetFields();
    this.setState({ LoginVisible : false });
  },
  RegisterHandleCancel() {
    this.refs.login.resetFields();
    this.setState({ RegisterVisible : false });
  },
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button type="primary" onClick={this.showLoginModal}>
            登陆
          </Button>
          <Button type="primary" onClick={this.showRegisterModal}>
            注册
          </Button>
        </ButtonGroup>
        <Modal ref="modal"
          visible={this.state.LoginVisible}
          title="登陆" onOk={this.LoginHandleOk} onCancel={this.LoginHandleCancel}
          footer={[
            <Button key="back" type="ghost" size="large" onClick={this.LoginHandleOkandleCancel}>返 回</Button>,
            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.LoginHandleOk.bind(this)}>
              提 交
            </Button>,
          ]}
        >
          <Login ref="login" />
        </Modal>
        <Modal ref="modal"
          visible={this.state.RegisterVisible}
          title="注册" onOk={this.RegisterHandleOk} onCancel={this.RegisterHandleCancel}
          footer={[
            <Button key="back" type="ghost" size="large" onClick={this.RegisterHandleCancel}>返 回</Button>,
            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.RegisterHandleOk.bind(this)}>
              提 交
            </Button>,
          ]}
        >
          <Register ref="registerb" />
        </Modal>
      </div>
    );
  },
});

module.exports = LoginModal;
