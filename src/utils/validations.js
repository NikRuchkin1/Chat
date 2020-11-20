export default ({ isAuth }) => ({
  email: (errors, value) => {
    if (!value) {
      errors.email = 'Укажите E-Mail';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errors.email = 'Неверный E-Mail';
    }
  },

  password: (errors, value) => {
    if (!value) {
      errors.password = 'Введите пароль';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
      errors.password = isAuth ? 'Неверный пароль' : 'Слишком лёгкий пароль';
    }
  },
});
