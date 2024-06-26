import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ComDialog({title,mes,open,handleOk,handleClose,bt1 = 'Ok',bt2 ='Cancel'}) {

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {mes}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOk}>{bt1}</Button>
          <Button onClick={handleClose}>{bt2}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}