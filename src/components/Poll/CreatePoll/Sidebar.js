import React from 'react'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import PollType from './PollType/PollType'
import ContentQandA from './ContentType/ContentQandA'
import ContentWordCloud from './ContentType/ContentWordCloud'
import ContentImageChoice from './ContentType/ContentImageChoice';
import ContentOpenEnded from './ContentType/ContentOpenEnded';
import Content from './ContentType/Content'
import ContentScales from './ContentType/ContentScales';
import Background from '../CreatePoll/Background'
import '../CreatePoll/CreatePolls.css'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
 tablabel: {
   minWidth: 65, maxWidth: 400,
   flexGrow: 1,
      flexShrink: 1,
 }
}));



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
        <Box p={3}>
          <Typography>{children}</Typography>
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



const Sidebar = ({ parentCallback, color, textcolor, clickHandler, setOpacity, togglePopup, component, setData1, data1, data2, setData2, data3, setData3, setData5, data5, 
data6, setData6, data4, setData4, setResult, result, inputList1, setInputList1, setState, state, inputListScales, setInputListScales, settextcolor, contentauth, imgresult, setImgResult }) => {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  
  
   
   const classes = useStyles();
    return (
        <Grid className="Sidebar" style={ { flexGrow: 1, flexShrink: 1}}>
                  <AppBar position="static" color="default" style={{marginTop: '0%'}} style={{flexGrow: 1, flexShrink: 1}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="full width tabs example"
          style={{flex: '1'}}
        >
          <Tab label="Type" {...a11yProps(0)} className={classes.tablabel} />
          <Tab label="Content" {...a11yProps(1)}className={classes.tablabel} />
          <Tab label="Background" {...a11yProps(2)}className={classes.tablabel} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}  >
          <PollType 
          clickHandler={clickHandler} handleChangeIndex={handleChangeIndex} style={{flex: '1'}}  />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}style={{flex: '1'}}>
        {component==="multiplechoice" && <Content setData1={setData1} data1={data1} setResult={setResult} result={result} inputList={inputList1} setInputList={setInputList1} handleChangeIndex={handleChangeIndex} contentauth={contentauth}/>}
        {component==="qanda" && <ContentQandA data6={data6} setData6={setData6} handleChangeIndex={handleChangeIndex} />}
        {component==="wordcloud" && <ContentWordCloud data4={data4} setData4={setData4} handleChangeIndex={handleChangeIndex}/>}
        {component==="openended" && <ContentOpenEnded setOpenEnded={setData3} OpenEnded={data3} handleChangeIndex={handleChangeIndex}/>}
       {component==="imagechoice" && <ContentImageChoice setData2={setData2} data2={data2} setImgResult={setImgResult} imgresult={imgresult} handleChangeIndex={handleChangeIndex} setState={setState} state={state}/>} 
       {component==="scales" && <ContentScales data5={data5} setData5={setData5} handleChangeIndex={handleChangeIndex} inputList={inputListScales} setInputList={setInputListScales}/>}

        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}style={{flex: '1'}}>
          <Background changecolor={settextcolor} parentCallback={parentCallback} textcolor={textcolor} color={color} setOpacity={setOpacity} togglePopup={togglePopup} />
        </TabPanel >
      </SwipeableViews>
                
           
        </Grid>
        
       
    );
};


export default Sidebar
