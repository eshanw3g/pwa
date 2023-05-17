import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, TextField } from '@mui/material';
import { validateSignIn } from '../validations';
import { login } from '../api/user_apis';
import { setSession } from '../functions/session';
import { SEV_ERROR } from '../constants/severities';
import ProgressDialog from '../components/ProgressDialog';
import AlertDialog from '../components/AlertDialog';

function SignIn({ pathname }) {
  const [alert, setAlert] = useState(false);
  const [severity, setSeverity] = useState('');
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState(false);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: validateSignIn,
    onSubmit: async (values, { resetForm }) => {
      try {
        setProgress(true);
        const res = await login(values);
        setSession(res.data, res.headers['x-authtoken']);
        navigate(pathname, {
          replace: true
        });
        resetForm({ values: '' });
      } catch (err) {
        if (err?.response?.data) {
          setMessage(err.response.data.message);
          setSeverity(SEV_ERROR);
          setAlert(true);
        }
        console.log(err);
      } finally {
        setProgress(false);
      }
    }
  });

  const handleEmailChange = (e) => {
    formik.setFieldError('email', '');
    formik.setFieldValue('email', e.target.value, false);
  };

  const handlePasswordChange = (e) => {
    formik.setFieldError('password', '');
    formik.setFieldValue('password', e.target.value, false);
  };

  const handleAlertClose = () => {
    setAlert(false);
    setMessage('');
    setSeverity('');
  };

  return (
    <Stack bgcolor="background.main" alignItems="center" p={30}>
      <Stack
        component="form"
        width={{ xs: '100%', sm: '400px' }}
        boxSizing="border-box"
        gap={30}
        bgcolor="white"
        p={30}
        onSubmit={formik.handleSubmit}>
        <TextField
          id="email"
          label="Email"
          placeholder="Email"
          type="text"
          value={formik.values.email}
          onChange={handleEmailChange}
          error={!!formik.errors.email}
          helperText={formik.errors.email}
          size="small"
        />
        <TextField
          id="password"
          label="Password"
          placeholder="Password"
          type="password"
          value={formik.values.password}
          onChange={handlePasswordChange}
          error={!!formik.errors.password}
          helperText={formik.errors.password}
          size="small"
        />
        <Button variant="contained" type="submit" fullWidth>
          Sign In
        </Button>
      </Stack>
      <AlertDialog
        open={alert}
        severity={severity || null}
        message={message}
        onClose={handleAlertClose}
      />
      <ProgressDialog open={progress} />
    </Stack>
  );
}

SignIn.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default SignIn;
