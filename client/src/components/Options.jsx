import React from 'react'
<<<<<<< HEAD
import { TextField, Button, Grid, Typography, Container, Paper } from '@material-ui/core'
import { makeStyles } from  "@material-ui/core";
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Assignment, ClassSharp, Phone, PhoneDisabled} from '@material-ui/icons'
import { SocketContext } from '../SocketContext';
import { useState } from 'react';
import { useContext } from 'react';
// import copy from 'copy-to-clipboard';

 
=======
import { Button,Paper, TextField,Grid, Typography, Container } from '@mui/material'
import { makeStyles } from  "@material-ui/core";
import {CopyToClipboard} from 'copy-to-clipboard'
import {Assignment, Phone, PhoneDisabled} from '@material-ui/core'
import { SocketContext } from '../SocketContext';
import { useContext  } from 'react';
import { useState } from 'react';

>>>>>>> e302aec2947a2a557f5a503ffd35a483b14cb251
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: '10px 20px',
<<<<<<< HEAD
    border: '2px solid black', 
=======
    border: '2px solid black',
>>>>>>> e302aec2947a2a557f5a503ffd35a483b14cb251
  },
}));


const Options = ({children}) => {
<<<<<<< HEAD
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();

  return (
    <Container className={classes.container} >
      <Paper elevation={10} className={classes.paper} >
        <form className={classes.root} noValidate autoComplete="off" >
          <Grid container className={classes.gridContainer}>
                <Grid item xs={12} md={6} className={classes.padding} >
                       <Typography gutterBottom variant='h6' >
                          Account Info
                       </Typography>
                       <TextField  label="Name" value={name} onChange={(e)=>setName(e.target.value)} fullWidth />
                       {console.log(me)}
                       <CopyToClipboard text={me} className={classes.margin} >
                         <Button 
                         variant='contained' 
                         color='primary' 
                         fullWidth 
                         startIcon={<Assignment fontSize='large' />}
                         className={classes.margin} >
                                Copy Your ID
                         </Button>

                       </CopyToClipboard>
                </Grid>

                <Grid item xs={12} md={6} className={classes.padding} >
                       <Typography gutterBottom variant='h6' >
                          Make Call
                       </Typography>
                       <TextField  label="ID to Call" value={idToCall} onChange={(e)=>setIdToCall(e.target.value)} fullWidth />
                       {console.log("this is idtocall :",idToCall)}
                        {callAccepted && !callEnded ? (
                          <Button 
                          variant='contained' 
                          color='secondary' 
                          startIcon={<PhoneDisabled fontSize='large' />}
                          fullWidth 
                          onClick={leaveCall} 
                          className={classes.margin}  >
                            Hang Up
                          </Button>
                        ): (
                          <Button 
                            variant='contained' 
                            color='primary' 
                            startIcon={<Phone fontSize='large' />}
                            fullWidth 
                            onClick={()=>callUser(idToCall)} 
                            className={classes.margin}  >
                              Call
                            </Button>
                        )}
                </Grid> 
          </Grid>

        </form>
      {children}
      
      </Paper>
      </Container>
  );
=======
 const {me,callEnded , name, setName, callAccepted,leaveCall, callUser} = useContext(SocketContext)
  const classes = useStyles()
  const [ idToCall, setIdToCall] = useState('')
  
  return (
        <Container className={classes.container} >
          <Paper elevation={10} className={classes.paper} >
            <form className={classes.root} noValidate autoComplete='off' >
                 <Grid container className={classes.gridContainer  } >
                    <Grid item xs={12} md={6} className={classes.padding} >
                          <Typography gutterBottom variant="h6">Account Info </Typography>
                          <TextField  label="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                          <CopyToClipboard text={me} className={classes.margin}  >
                               <Button variant='contained' color='primary' fullWidth startIcon={<Assignment fontSize= "large"/>} >

                               </Button>
                          </CopyToClipboard>
                    </Grid>
                 </Grid>
            </form>
          </Paper>
        </Container>
        )
>>>>>>> e302aec2947a2a557f5a503ffd35a483b14cb251
}

export default Options