import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';
import validateFunc from 'utils/validations';

export default withFormik({
  mapPropsToValue: () => ({ email: '' }),
  validateFunc: (values) => {
    let errors = {};
    const validate = validateFunc({ isAuth: false });

    Object.keys(values).forEach((key) => validate[key] && validate[key](errors, values[key]));

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  },
  displayName: 'RegisterForm',
})(RegisterForm);
