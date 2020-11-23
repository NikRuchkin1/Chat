import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';
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
})(RegisterForm);
