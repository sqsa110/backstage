import React from 'react';
import { Modal, Button } from 'antd';
import Login from './login.js';

const LoginModal = React.createClass({
  getInitialState() {
    return {
      loading: false,
      visible: false,
    };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {

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
      this.setState({ loading: false, visible: false });
    }.bind(this))
    .fail(function() {
      console.log("error");
      this.setState({ loading: false });
    })
    .always(function() {
      console.log("complete");
    });
        
  },
  handleCancel() {
    this.refs.login.resetFields();
    this.setState({ visible: false });
  },
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          登陆
        </Button>
        <Modal ref="modal"
          visible={this.state.visible}
          title="登陆" onOk={this.handleOk} onCancel={this.handleCancel}
          footer={[
            <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>返 回</Button>,
            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk.bind(this)}>
              提 交
            </Button>,
          ]}
        >
          <Login ref="login" />
        </Modal>
      </div>
    );
  },
});

module.exports = LoginModal;
