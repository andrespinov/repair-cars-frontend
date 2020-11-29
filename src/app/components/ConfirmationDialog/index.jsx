import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React from 'react';
import Button from '../Button';

const ConfirmationDialog = ({open, handleClose, title, description}) => {
  return (
    <Dialog
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color='primary' title='Cancelar' />
          <Button onClick={() => handleClose(true)} color='primary' title='Aceptar' autoFocus />
        </DialogActions>
      </Dialog>
  );
};

export default ConfirmationDialog;
