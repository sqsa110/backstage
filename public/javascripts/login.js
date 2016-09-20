import React from 'react';
import { Button, Form, Input } from 'antd';

const createForm = Form.create;
const FormItem = Form.Item;

function noop() {
  return false;
}

let Login = React.createClass({
  handleReset() {
    this.props.form.resetFields();
  },
  handleCancel(e) {
    e.preventDefault();
    this.modalHandleCancel();
  },
  handleSubmit() {
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  },

  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;

    const emailProps = getFieldProps('email', {
      validate: [{
        rules: [
          { required: true },
          { type: 'email', message: '请输入正确的邮箱地址' }
        ],
        trigger: ['onBlur']
      }]
    });

    const passwdProps = getFieldProps('passwd', {
      rules: [
        { required: true, whitespace: true, message: '请填写密码' }
      ],
      trigger: 'onBlur'
    });

    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 }
    };
    return (
      <Form horizontal form={this.props.form}>
        <FormItem
          {...formItemLayout}
          label="邮箱"
          hasFeedback
        >
          <Input {...emailProps} type="email" placeholder="onBlur 与 onChange 相结合" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="密码"
          hasFeedback
        >
          <Input {...passwdProps} type="password" autoComplete="off"
            onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
          />
        </FormItem>

      </Form>
    );
  },
});

Login = createForm()(Login);

module.exports = Login;

//  <Button type="ghost" onClick={this.handleReset}>取消</Button>
//  
/*          
        <FormItem wrapperCol={{ span: 12, offset: 7 }}>
          <Button type="primary" onClick={this.handleSubmit}>确定</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="ghost" onClick={this.handleCancel}>取消</Button>
        </FormItem>
*/