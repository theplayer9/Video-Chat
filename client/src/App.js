import React from 'react'
// import { Typography, AppBar } from '@material-ui/core'
// import { AppBar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';



import VideoPlayer from './components/VideoPlayer'
import Notifications from './components/Notifications'
import Options  from "./components/Options"



const App = () => {
  return (
    <div>
        <AppBar position='static' color='inherit' >
            <Typography variant='h2' align='center' > Naughty boi</Typography>
        </AppBar>
        {/* <VideoPlayer />
        <Options>
            <Notifications />
        </Options> */}
    </div>
  )
}

export default App