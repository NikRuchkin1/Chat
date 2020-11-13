import React from 'react';
import { Form, Input } from 'antd';
import { Button, Block } from 'components';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  render() {
    return (
      <div>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}>
            <Form.Item
              hasFeedback
              validateStatus="success"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}>
              <Input
                size="large"
                prefix={<UserOutlined type="lock" style={{ color: 'rgba(0,0,0,0.25)' }} />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}>
              <Input
                size="large"
                prefix={<LockOutlined type="lock" style={{ color: 'rgba(0,0,0,0.25)' }} />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                Войти в аккаунт
              </Button>
            </Form.Item>
            <Form.Item>
              <Link className="auth__register-link" to="/register">
                Зарегистрироваться
              </Link>
            </Form.Item>
          </Form>
        </Block>
      </div>
    );
  }
}

export default LoginForm;
