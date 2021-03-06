import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Overall from '../Pages/Overall';
import Learning from '../Pages/Learning';
import Progress from '../Pages/Progress';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{backgroundColor:"white", width:"100%"}}
    >
      {value === index && (
        <Box p={3}>
          <Typography style={{width:"100%"}} >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"100%"
  },
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="static" style={{backgroundColor:"white",color:"rgba(0,0,0,0.8)", width:"100%"}} >
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Overall" {...a11yProps(0)} />
          <Tab label="Learning" {...a11yProps(1)} />
          <Tab label="Progress" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Overall id={props.id} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Learning id={props.id} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Progress id={props.id} />
      </TabPanel>
    </div>
  );
}
