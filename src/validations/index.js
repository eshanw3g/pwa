import { EMAIL_REGEX } from '../constants/regex';

const validateSignIn = (values) => {
  const errors = {};

  if (!values.email.trim().length) {
    errors.email = 'Required';
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = 'Invalid';
  }

  if (!values.password.trim().length) {
    errors.password = 'Required';
  }

  return errors;
};

export { validateSignIn };
