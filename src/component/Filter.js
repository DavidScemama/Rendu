import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fitem from './Social'
import Sitem from './Ecologique'
import './Filter.css'




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    
  
    return (
      <div 
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box  p={3}>
            <Typography >{children}</Typography>
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
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.primary,
    },
  }));
  
  export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
    
    
      <div className={classes.root}>
        <AppBar style={{marginTop:30}} position="static" color="default" >
          <Tabs 
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor ="secondary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >

          
            <Tab label="Sociales" {...a11yProps(0)} />
            <Tab label="Écologiques" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Fitem />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Sitem />
          </TabPanel>
      </div>
    );
  }