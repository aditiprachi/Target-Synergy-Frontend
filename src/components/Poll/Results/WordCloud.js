import styled, { css } from "styled-components";
import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ReactWordcloud from 'react-wordcloud';
import axios from 'axios'
import randomColor from 'randomcolor'


const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      
      },
    },
    h:{
      fontSize: '15px',
      marginBottom: '0',

    },
    typography: {
        // for settings
        fontSize: 12,
      },
    button: {
        margin: theme.spacing(1),
        borderRadius: "2em",
        
      },
    addicon: {
        color: 'solid white',
    },
}));

export const Container = styled.div`
inline-size: 150px;
overflow-wrap: break-word;
text-align: center;
float: left;
  width: 250px;
  padding: 3px;
  margin: 3px;

`;


export const box = styled.div`
  height: 1%;

`;
const WordCloud = (props) => {
    const url = props.match.params.id;
    const [WCResponses , setWCResponses] =useState({});
    const [resUrl, setResUrl] = useState("");
    const [question,setquestion]=useState({question:""})
    
    useEffect(async ()=>{
      await axios.get(`https://targetsynergy-backend.herokuapp.com/WC/${url}`)
   .then(res=>{
         setquestion({question:res.data.question})
        //  console.log(question);
    })
    .catch((error)=>{
      console.log(error)
    })
    await axios.get(`https://targetsynergy-backend.herokuapp.com/quest/${url}`)
    .then(result => {
      setResUrl(result.data);
      // console.log(result.data);
      if(resUrl !== ""){
        axios.get(`https://targetsynergy-backend.herokuapp.com/WordCloudResponse/${resUrl}`)
          .then(res=>{
        // console.log(res.data)
        setWCResponses(res.data)
        })
        
    }
    })
    .catch(error => console.log(error))
    
  },[url,resUrl])
  
  
const wcr=[];

      let i=0
      Object.entries(WCResponses).forEach(([key, value]) => {
      wcr[i]=({text:`${key}`, value:`${value}`})
      // console.log(wcr[i])
      i++
      })

 


  const resizeStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    width: '90%',
    height: '30em',
    marginTop: '2%',
    padding: "1%"
  };
  const callbacks = {
      getWordColor: word => word.value > 50 ? randomColor({luminosity: 'bright'}) : randomColor({luminosity: 'bright'}),
      onWordClick: console.log,
      onWordMouseOver: console.log,
      getWordTooltip: word => `Total entries = ${word.value} `
  }

  const options = {
      enableTooltip: true,
      deterministic: false,
      fontFamily: "helvetica",
      fontSizes: [ 30, 100,45],
      fontStyle: "normal",
      fontWeight: "normal",
      padding: 2,
      rotations: 2,
      rotationAngles: [0],
      scale: "sqrt",
      spiral: "archimedean",
      transitionDuration: 1000
  };
  const size = [1200, 400,300, 200];

return (
<div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%',width:'100%',paddingTop:"3%"}} >
<h1 style={{fontFamily: "Helvetica", textAlign: 'center'}} >{question.question}</h1>

  <div style={resizeStyle}>
  <ReactWordcloud
  callbacks={callbacks}
  options={options}

  size={size}
  words={wcr}
  />
</div>
</div>
);
}

export default WordCloud
