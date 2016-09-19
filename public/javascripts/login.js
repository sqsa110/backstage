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

  userExists(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      setTimeout(() => {
        if (value === 'aaa@aaa.com') {
          callback([new Error('抱歉，该邮箱已注册。')]);
        } else {
          callback();
        }
      }, 800);
    }
  },

  checkPass(rule, value, callback) {
    const { validateFields } = this.props.form;
    if (value) {
      validateFields(['rePasswd'], { force: true });
    }
    callback();
  },

  checkPass2(rule, value, callback) {
    const { getFieldValue } = this.props.form;
    if (value && value !== getFieldValue('passwd')) {
      callback('两次输入密码不一致！');
    } else {
      callback();
    }
  },

  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const nameProps = getFieldProps('name', {
      rules: [
        { required: true, min: 5, message: '用户名至少为 5 个字符' }
      ],
      trigger: 'onBlur'
    });
    const emailProps = getFieldProps('email', {
      validate: [{
        rules: [
          { required: true },
        ],
        trigger: 'onChange'
      }, {
        rules: [
          { type: 'email', message: '请输入正确的邮箱地址' },
          { validator: this.userExists }
        ],
        trigger: ['onBlur']
      }]
    });
    const passwdProps = getFieldProps('passwd', {
      rules: [
        { required: true, whitespace: true, message: '请填写密码' },
        { validator: this.checkPass }
      ],
      trigger: 'onBlur'
    });
    const rePasswdProps = getFieldProps('rePasswd', {
      rules: [{
        required: true,
        whitespace: true,
        message: '请再次输入密码'
      }, {
        validator: this.checkPass2
      }],
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
          help={isFieldValidating('email') ? '校验中...' : (getFieldError('email') || []).join(', ')}
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

        <FormItem
          {...formItemLayout}
          label="确认密码"
          hasFeedback
        >
          <Input {...rePasswdProps} type="password" autoComplete="off" placeholder="两次输入密码保持一致"
            onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
          />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="名字"
          hasFeedback
        >
          <Input {...nameProps} placeholder="实时校验，输入 JasonWood 看看" />
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