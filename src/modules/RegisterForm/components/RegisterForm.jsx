import React from 'react';
import { Form, Input } from 'antd';
import { Button, Block } from 'components';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const success = false;
const RegisterForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
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
            onSubmit={handleSubmit}
            initialValues={{
              remember: true,
            }}>
            <Form.Item
              validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
              hasFeedback
              help={errors.email}>
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
            <Form.Item name="name">
              <Input
                size="large"
                prefix={<MailOutlined type="lock" style={{ color: 'rgba(0,0,0,0.25)' }} />}
                type="name"
                placeholder="Ваше имя"
              />
            </Form.Item>

            <Form.Item
              name="first password"
              validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
              help={errors.password}>
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

            <Form.Item
              name="pass"
              validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}>
              <Input
                size="large"
                prefix={<LockOutlined type="lock" style={{ color: 'rgba(0,0,0,0.25)' }} />}
                placeholder="Повторите пароль"
                id="password"
                type="password"
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
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Form.Item>
              <NavLink className="auth__register-link" to="/login">
                Войти в аккаунт
              </NavLink>
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
};
export default RegisterForm;
