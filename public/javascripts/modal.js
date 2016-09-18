import React from 'react';
import { Modal, Button } from 'antd';
import Register from './register.js';

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

    this.refs.registerb.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });

    this.setState({ loading: false, visible: false });
    
  },
  handleCancel() {
    this.refs.registerb.resetFields();
    this.setState({ visible: false });
  },
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          显示对话框
        </Button>
        <Modal ref="modal"
          visible={this.state.visible}
          title="注册" onOk={this.handleOk} onCancel={this.handleCancel}
          footer={[
            <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>返 回</Button>,
            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk.bind(this)}>
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
