import React from 'react';
import { Form, Input } from 'antd';
import { Button, Block } from 'components';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class RegisterForm extends React.Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  render() {
    const success = false;
    return (
      <div>
        <div className="auth__top">
          <h2>Регистрация</h2>
          <p>Для входа в чат, вам нужно зарегистрироваться</p>
        </div>
        <Block>
          {!success ? (
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
                name="E-mail"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}>
                <Input
                  size="large"
                  prefix={<UserOutlined type="mail" style={{ color: 'rgba(0,0,0,0.25)' }} />}
                  placeholder="E-mail"
                />
              </Form.Item>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}>
                <Input
                  size="large"
                  prefix={<MailOutlined type="lock" style={{ color: 'rgba(0,0,0,0.25)' }} />}
                  type="name"
                  placeholder="Ваше имя"
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
                  placeholder="Введите пароль"
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
                  placeholder="Повторите пароль"
                />
              </Form.Item>

              <Form.Item>
                <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                  Зарегистрироваться
                </Button>
              </Form.Item>
              <Form.Item>
                <Link className="auth__register-link" to="/login">
                  Войти в аккаунт
                </Link>
              </Form.Item>
            </Form>
          ) : (
            <div className="auth__success-block">
              <div>
                <InfoCircleTwoTone style={{ size: '50px' }} />
              </div>
              <h2>Подтвердите свой аккаунт</h2>
              <p>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
            </div>
          )}
        </Block>
      </div>
    );
  }
}

export default RegisterForm;
