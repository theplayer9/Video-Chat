import React from 'react'
import { Button,Paper, TextField,Grid, Typography, Container } from '@mui/material'
import { makeStyles } from  "@material-ui/core";
import {CopyToClipboard} from 'copy-to-clipboard'
import {Assignment, Phone, PhoneDisabled} from '@material-ui/core'
import { SocketContext } from '../SocketContext';
import { useContext  } from 'react';
import { useState } from 'react';

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
    border: '2px solid black',
  },
}));


const Options = ({children}) => {
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
}

export default Options