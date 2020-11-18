import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';

export default withFormik({
  mapPropsToValue: () => ({ email: '' }),
  validate: (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Введите пароль';
    } else if (!/(?=.*[a-zA-Z0-9])/i.test(values.password)) {
      errors.password = 'Слишком лёгкий пароль';
    }

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  },
  displayName: 'RegisterForm',
})(RegisterForm);
