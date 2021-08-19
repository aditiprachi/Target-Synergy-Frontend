import React,{useState, useEffect,useContext} from 'react';
import ReactWordcloud from 'react-wordcloud';
import axios from 'axios'
import { IdContext } from '../../../../IdContext';


const wcr=[];
const WordCloud=({data4,textcolor})=>{
  const id = useContext(IdContext);
  const url = id.id;

    useEffect(async () => {
      var result = await axios.get(`http://localhost:8080${url}`)
      console.log(result.data)

    let i=0
    Object.entries(result.data).forEach(([key, value]) => {
  result.value = true;
  wcr[i]=({text:`${key}`, value:`${value}`})
  i++
})
console.log(wcr)
},[]);
let wcrs=[...wcr]
console.log(wcrs)

const resizeStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    width: '100%',
    height: '90%',
    marginTop: '5%'
  };
  const callbacks = {
    getWordColor: word => word.value > 50 ? "blue" : "red",
    onWordClick: console.log,
    onWordMouseOver: console.log,
    getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  }
 
  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "helvetica",
    fontSizes: [ 30, 100],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 2,
    rotationAngles: [0, 90, -90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
  };
  const size = [1200, 400];

    return (
      <div>
        <h1 style={{color: textcolor}}>{data4.question}</h1>
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
  export default WordCloud;