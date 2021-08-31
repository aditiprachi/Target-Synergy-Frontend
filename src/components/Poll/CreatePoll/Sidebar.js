import React from 'react'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import PollType from './PollType/PollType'
import ContentQandA from './ContentType/ContentQandA'
import ContentWordCloud from './ContentType/ContentWordCloud'
import ContentRanking from './ContentType/ContentRanking';
import ContentOpenEnded from './ContentType/ContentOpenEnded';
import Content from './ContentType/Content'
import ContentScales from './ContentType/ContentScales';
import Background from './Background/Background'
import Backgroundqna from './Background/Backgroundqna'
import BackgroundWC from './Background/BackgroundWC'
import BackgroundRanking from './Background/BackgroundRanking'
import BackgroundScales from './Background/BackgroundScales'
import BgOpenended from './Background/Backgroundqna';
import '../CreatePoll/CreatePolls.css'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
 tablabel: {
   minWidth: 50, maxWidth: 400,
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
data6, setData6, data4, setData4, setResult, result, inputListMC, inputListRanking,setInputListRanking, setInputListMC, setState, state, inputListScales, setInputListScales, settextcolor, contentauth,opacity, BackgroundImage }) => {

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
        <Grid className="Sidebar" style={ {  height:"100%", width: '28%', marginTop: '0%'}}>
                  <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="full width tabs example"
         
          
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
          clickHandler={clickHandler} handleChangeIndex={handleChangeIndex} style={{flex: '1', height: '100%'}}  />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}style={{flex: '1'}}>
        {component==="multiplechoice" && <Content setData1={setData1} data1={data1} setResult={setResult} result={result} inputList={inputListMC} setInputList={setInputListMC} handleChangeIndex={handleChangeIndex} contentauth={contentauth}/>}
        {component==="qanda" && <ContentQandA QandA={data6} setQandA={setData6} handleChangeIndex={handleChangeIndex} contentauth={contentauth}/>}
        {component==="wordcloud" && <ContentWordCloud WC={data4} setWC={setData4} handleChangeIndex={handleChangeIndex} contentauth={contentauth}/>}
        {component==="openended" && <ContentOpenEnded setOpenEnded={setData3} OpenEnded={data3} handleChangeIndex={handleChangeIndex} contentauth={contentauth}/>}
       {component==="rating" && <ContentRanking setData2={setData2} data2={data2} inputList={inputListRanking} setInputList={setInputListRanking} handleChangeIndex={handleChangeIndex} setState={setState} state={state} contentauth={contentauth}/>} 
       {component==="scales" && <ContentScales data5={data5} setData5={setData5} setResult={setResult} result={result} inputList={inputListScales} setInputList={setInputListScales} handleChangeIndex={handleChangeIndex} contentauth={contentauth}/>}

        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}style={{flex: '1'}}>
         {component==="multiplechoice" && <Background changecolor={settextcolor} parentCallback={parentCallback} textcolor={textcolor} color={color} setOpacity={setOpacity} opacity={opacity} togglePopup={togglePopup} BackgroundImage={BackgroundImage}/>}
         {component==="qanda" && <Backgroundqna changecolor={settextcolor} parentCallback={parentCallback} textcolor={textcolor} color={color} setOpacity={setOpacity} opacity={opacity} togglePopup={togglePopup} BackgroundImage={BackgroundImage}/>}
         {component==="wordcloud" && <BackgroundWC changecolor={settextcolor} parentCallback={parentCallback} textcolor={textcolor} color={color} setOpacity={setOpacity} opacity={opacity} togglePopup={togglePopup} BackgroundImage={BackgroundImage}/>}
         {component==="rating" && <BackgroundRanking changecolor={settextcolor} parentCallback={parentCallback} textcolor={textcolor} color={color} setOpacity={setOpacity} opacity={opacity} togglePopup={togglePopup} BackgroundImage={BackgroundImage}/>}
         {component==="openended" && <BgOpenended changecolor={settextcolor} parentCallback={parentCallback} textcolor={textcolor} color={color} setOpacity={setOpacity} opacity={opacity} togglePopup={togglePopup} BackgroundImage={BackgroundImage}/>}
         {component==="scales" && <BackgroundScales changecolor={settextcolor} parentCallback={parentCallback} textcolor={textcolor} color={color} setOpacity={setOpacity} opacity={opacity} togglePopup={togglePopup} BackgroundImage={BackgroundImage}/>}
        </TabPanel >
      </SwipeableViews>
                
           
        </Grid>
        
       
    );
};


export default Sidebar
