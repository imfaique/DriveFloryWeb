import React, {  useEffect } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Paper from '@material-ui/core/Paper';


const API = process.env.REACT_APP_API_KEY

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}


function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

function Complain() {
  const [complains, setComplain] = React.useState([]);

  useEffect(() => {
    let complainURL = `${API}complain`
    console.log(complains)
    fetch(complainURL)
      .then((response) => response.json())
      .then((json) => setComplain(json))
      .catch((error) => console.error(error))

  }, []);



  const [open, setOpen] = React.useState(false);
  const [shikayat, setShikayat] = React.useState('')


  const handleClickOpen = (a) => {
    console.log(a)
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  const leftDiv = (i) => {

    return (
      <Paper key={i} elevation={5} className='paper' onClick={handleClickOpen}>

        {/* <div className='paperRow'>
          <h5>User Name: </h5> <span> {i._id}</span>
        </div> */}

        <div className='paperRow'>
          <h5>User Name: </h5> <span> {i.UserName}</span>
        </div>

        <div className='paperRow'>
          <div className='h55'><h5>Subject: </h5></div> <span> {i.Subject}</span>
        </div>
        <div className='paperRow'>
          <h5>User Email: </h5> <span> {i.UserEmail}</span>
        </div>
      </Paper>
    )
  }

  const rightDiv = (i) => {

    return (
      <Paper elevation={5} className='paper' onClick={handleClickOpen}>

        <div className='paperRow'>
          <h5>User Name: </h5> <span> {i.UserName}</span>
        </div>

        <div className='paperRow'>
          <div className='h55'><h5>Subject: </h5></div> <span> {i.Subject}</span>
        </div>
        <div className='paperRow'>
          <h5>User Email: </h5> <span> {i.UserEmail}</span>
        </div>
      </Paper>
    )
  }


  return (
    <>
      <h1>COMPLAIN</h1>
      <div className='i'>
        <div className='left-comaplain'>

          {
            complains.map((complain, index) =>
              (index % 2 === 0) ? (leftDiv(complain)) : null
            )
          }
        </div>

        <div className='right-comaplain'>

          {
            complains.map((complain, index) =>
              (index % 2 === 1) ? (rightDiv(complain)) : null
            )
          }
        </div>



        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Complain
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              {/* {shikayat} */}
            </Typography>

          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    </>
  );
}

export default Complain;
