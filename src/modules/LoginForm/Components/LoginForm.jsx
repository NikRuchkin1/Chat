import React from 'react';
import { Form, Input } from 'antd';
import { Button, Block } from 'components';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
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
          onSubmit={handleSubmit}
          initialValues={{
            remember: true,
          }}>
          <Form.Item
            validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
            hasFeedback
            help={!touched.email ? '' : errors.email}>
            <Input
              id="email"
              size="large"
              prefix={<UserOutlined type="mail" style={{ color: 'rgba(0,0,0,0.25)' }} />}
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item
            name="first password"
            validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
            help={!touched.password ? '' : errors.password}>
            <Input
              size="large"
              prefix={<LockOutlined type="lock" style={{ color: 'rgba(0,0,0,0.25)' }} />}
              type="password"
              placeholder="Введите пароль"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item>
            <Button
              size="large"
              onClick={handleSubmit}
              type="primary"
              htmlType="submit"
              className="login-form-button">
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
};

export default LoginForm;
