import LoginForm from '../Components/LoginForm';
import { withFormik } from 'formik';
import validateForm from 'utils/validations';

export default withFormik({
  validate: (values) => {
    let errors = {};
    validateForm({ isAuth: false, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  },
  displayName: 'RegisterForm',
})(LoginForm);
