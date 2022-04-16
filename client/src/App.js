import React from "react";
import { AppBar, Typography } from "@mui/material";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import { makeStyles } from "@mui/styles";

// const useStyle = makeStyles((theme) => ({
//   appBar: {
//     borderRadius: 15,
//     margin: "30px 100px",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "600px",
//     border: "2px solid black",

//     [theme.breakpoints.down("xs")]: {
//       width: "90%",
//     },
//   },
//   image: {
//     marginLeft: "15px",
//   },
//   wrapper: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     width: "100%",
//   },
// }));

const App = () => {

    // const classes = useStyle()

  return (
    <div>
      {/* <div>Video chat theplayer</div> */}
      <AppBar  position="static" color="inherit">
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
