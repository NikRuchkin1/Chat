import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';
import validateForm from 'utils/validations';

export default withFormik({
  //123
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    fullName: '',
    password: '',
    password2: '',
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
  displayName: 'RegisterForm',
})(RegisterForm);
