import React from "react";
import { AppBar, Typography } from "@mui/material";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications"
import Options from "./components/Options";
import { makeStyles } from "@mui/material";

const App = () => {
  return (
    <div>
       {/* <div>Video chat theplayer</div> */}
      <AppBar position="static" color="inherit">
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
