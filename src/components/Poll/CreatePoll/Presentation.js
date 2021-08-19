import React from 'react'
import '../CreatePoll/CreatePolls.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MultipleChoice from "./PollType/MultipleChoice";
import WordCloud from './PollType/WordCloud';
import ImageChoice from './PollType/ImageChoice';
import Scales from './PollType/Scales';
import QandA from './PollType/QandA'
import OpenEnded from './PollType/OpenEnded';


const useStyles = makeStyles((theme) => ({
    
    paper: {
      flexGrow: 1,
      flexShrink: 1,
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  }));

const Presentation = ({color, textcolor, component, opacity, img, data1, data2, data3,data5,data4,data6, result, inputList1,state, imgresult, inputListScales}) => {
    const classes = useStyles();

    return (
       
                    <Paper className={classes.paper} 
                            style={{
                                border: "1px solid black",
                                width: "75%",
                                maxHeight: "800px",
                                minHeight: '400px',
                                marginLeft: "26%",
                                backgroundColor: color,
                                opacity: opacity/100,
                                backgroundImage: `url(${img})`,
                                color: textcolor,
                    }}
                    >
                   
        {component === 'imagechoice' && <ImageChoice data2={data2} images={state} imgresult={imgresult} />} 
        {component === 'multiplechoice' && <MultipleChoice data1={data1} result={result} inputList={inputList1}/>  }
        {component === 'wordcloud' && <WordCloud data4={data4}/>} 
        {component === 'qanda' && <QandA data6={data6}/>} 
        {component === 'scales' && <Scales data5={data5} inputList={inputListScales}/>} 
        {component === 'openended' && <OpenEnded openEnded={data3}/>}

                    </Paper>
                    
    );
}


export default Presentation
