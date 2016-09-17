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
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  },
  handleCancel() {
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
          title="对话框标题" onOk={this.handleOk} onCancel={this.handleCancel}
          footer={[
            <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>返 回</Button>,
            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
              提 交
            </Button>,
          ]}
        >
          <Register />
        </Modal>
      </div>
    );
  },
});

module.exports = LoginModal;

