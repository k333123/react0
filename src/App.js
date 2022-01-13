import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Box, Button} from '@material-ui/core'; 

function App() {
  return ( 
    <div> 
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            xs=8
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            xs=4
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            xs=4
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            xs=8
          </Box>
        </Grid>
      </Grid>

      Welcom to kkom-girack<br></br>
      <Button variant="contained" color="primary" onClick={()=>alert("Kkom!")}>
        Welcom to kkom-girack1
      </Button> 
    </div>
  );
}

export default App;
