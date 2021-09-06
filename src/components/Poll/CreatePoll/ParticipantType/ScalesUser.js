import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import { ChatVoice } from 'styled-icons/remix-line';
import { List } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import randomColor from 'randomcolor';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100%'
    },
    input: {
      width: 20,
    },
    button: {
      margin: theme.spacing(1),
      borderRadius: "2em",
      
    },
  }));
  const PrettoSlider = withStyles({
    root: {
      color: randomColor(),
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
 
  
  const Scales =(props) => {
    const auth = props.auth;
    const history = useHistory();
    const u = props.match.params.id;
    const [textBased , setTextBased] = useState({question:'', choices:[]})
  const [Bg, setBg]=useState({bgcolor:'',textcolor:'',opacity:1})
    useEffect(async () => {
      var result = await axios.get(`https://targetsynergy-backend.herokuapp.com/SC/${u}`)
      setTextBased({
        question: result.data.question,
       choices: result.data.choices
        
      })
      

    },[])
    const choice=[];
    textBased.choices.map((post,key) => (
    choice[key]=((post.option))
)

);
console.log(choice)
let Answers = [...choice];
 console.log(Answers);
console.log(textBased.question)

    const classes = useStyles();
    let a=new Array(Answers.length).fill(0)
   // console.log(a)
    

    //const [inputList, setInputList] = useState([{value}]);
    const [value, setValue] = React.useState(a);
    const [inputList, setInputList] = useState([{ choice: "" }]);
    const handleSliderChange =(index)=>(event, newValue) => {
      const list=[...value]
  
      list[index]=newValue
      setValue(list);
      console.log(list)
    };
  
    const handleInputChange = (event,index) => {
     setValue(event.target.value === '' ?  '' : Number(event.target.value));
    
      
    };
  
    const handleBlur = () => {
      if (value < 0) {
        setValue(0);
      } else if (value > 100) {
        setValue(100);
      }
    };
    const handleClick = () =>{
      const data5=({
        question: textBased.question,
        choices:[{option: ""},{votes: 0}],
        googleId: "a"
      })
      Answers.map((x,i)=>{
        data5.choices[i]={option:(x), votes:((textBased.choices[i].votes + value[i])/2)}
      })
      console.log(data5)
      axios.put(`https://targetsynergy-backend.herokuapp.com/SC/${u}`, data5)
             .then(res=>{
                console.log(res)
              })
              if (window.confirm('Your response has been successfully submitted. You will now be redirected to the homepage.   To submit another response, click Cancel ')) 
              {
              window.location.href='https://targetsynergy.herokuapp.com';
              };
    }
    const uri = `/SC/${u}/results`
  function handleResult(path) {
    history.push(path);
}
    return (
      <div  style={{display: "flex", flexDirection: 'column', justifyContent: 'center', margin:"auto",alignItems: 'center', width: '60%', height: '100%',paddingTop:"5%"}}><h1 fontFamily= "Helvetica">{textBased.question}</h1>
           <form onSubmit={handleClick} className={classes.root} noValidate autoComplete="off">
      
{Answers.map((x, i) => {
 
    return(
        <div style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '95%', margin: '2%' }}>
      
          <h3>{x}</h3>
     
            <PrettoSlider
              value={value[i]}
              onChange={handleSliderChange(i)}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
       
          
        </div>
        
           

        );
      })}
      <div style={{display: 'flex',flexDirection: 'column', width: '100%', justifyContent: 'space-evenly',alignItems: "center"}}>
        <Button
         style={{ width: "20%",background:"#cc0000", color:"white" }}
         className={classes.button}
         variant="contained"
         onClick = {()=>handleClick()}
         size="large"
         fullWidth={true}
      >Submit
      </Button>
      { auth && <Button
        style={{ width: "20%",background:"#cc0000", color:"white"}}
        className={classes.button}
        variant="contained"
        onClick={() => {handleResult(`${uri}`)}}
        size="large"
       >View Result
      </Button> }
      </div>
  
       
       
       </form>
      </div>
      
    );
  }
  export default Scales;