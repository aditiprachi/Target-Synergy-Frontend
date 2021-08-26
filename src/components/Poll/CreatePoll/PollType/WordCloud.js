import React,{useState, useEffect,useContext} from 'react';
import ReactWordcloud from 'react-wordcloud';
import axios from 'axios'
import { IdContext } from '../../../../IdContext';


const wcr=[{
  text: 'poll',
  value: 64,
},
{
  text: 'live',
  value: 11,
},
{
  text: 'thought',
  value: 16,
},
{
  text: 'Bad',
  value: 9,
},
{
  text: 'Good',
  value: 19,
},
{
  text: 'Opinion',
  value: 11,
},
{
  text: 'Word',
  value: 89,
},
{
  text: 'Cloud',
  value: 29,
},
{
  text: 'Capture',
  value: 23,
},
{
  text: 'Matters',
  value: 10,
},
{
  text: 'happy',
  value: 50,
},
{
  text: 'Innovation',
  value: 91,
},
{
  text: 'Curious',
  value: 15,
},
{
  text: 'Interactive',
  value: 60,
},];
const WordCloud=({data4,textcolor})=>{
  const callbacks = {
   //getWordColor: word => word.value > 50 ? "blue" : "red",
    onWordClick: console.log,
    onWordMouseOver: console.log,
   // getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  }
 
  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "helvetica",
    fontSizes: [ 10, 75],
    fontStyle: "normal",
    fontWeight: "bold",
    padding: 1,
    rotations: 2,
    rotationAngles: [0],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
  };
 

    return (
      <div style={{width:'100%',height: '100%', display: 'flex',flexDirection:'column'}}>
        <h1 style={{color: textcolor}}>{data4.question}</h1>
        <div style={{display: 'flex',width: '100%', height: '90%', border: '1px black',justifyContent:'center',alignItems: 'center'}}>
      <ReactWordcloud
        callbacks={callbacks}
        options={options}
    
        words={wcr}
        style={{width:'100%',height:'100%'}}
      />
      </div>
      </div>
    );
  }
  export default WordCloud;