import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SimpleTabs from './Tabs/SimpleTabs';

function App() {
  return (
    <div className="App">
      <AppBar position="static"  style={{backgroundColor:"white",color:"rgba(0,0,0,0.8)"}} >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6">
            Name
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="wrap" >
        <SimpleTabs/>
      </div>
    </div>
  );
}

export default App;
