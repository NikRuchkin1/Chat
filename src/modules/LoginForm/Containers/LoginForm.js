import LoginForm from '../Components/LoginForm';
import { withFormik } from 'formik';
import validateForm from 'utils/validations';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validate: (values) => {
    let errors = {};
    validateForm({ isAuth: true, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  },
  displayName: 'LoginForm',
})(LoginForm);
