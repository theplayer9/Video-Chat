import React from "react";
import { AppBar, Typography } from "@mui/material";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import { makeStyles } from  "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    height: '20%',
    border: '2px solid black',
    // marginLeft: '10px',
    // marginRight: '150px',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: "center",
    width: '100%',
    // justifyContent: 'center'
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper} >
      {/* <div>Video chat theplayer</div> */}
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
          Naughty boi
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications></Notifications>
      </Options>
    </div>
  );
};

export default App;
