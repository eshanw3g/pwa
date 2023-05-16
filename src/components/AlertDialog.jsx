import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, Box, Alert, AlertTitle } from '@mui/material';
import { SEV_INFO, SEV_SUCCESS, SEV_WARNING, SEV_ERROR } from '../constants/severities';

function AlertDialog({ open, severity, message, onClose, title }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box borderRadius={5}>
        <Alert variant="filled" severity={severity}>
          {title ? <AlertTitle>{title}</AlertTitle> : null}
          {message}
        </Alert>
      </Box>
    </Dialog>
  );
}

AlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  severity: PropTypes.oneOf([SEV_INFO, SEV_SUCCESS, SEV_WARNING, SEV_ERROR]),
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
};

AlertDialog.defaultProps = {
  severity: SEV_INFO
};

export default AlertDialog;
