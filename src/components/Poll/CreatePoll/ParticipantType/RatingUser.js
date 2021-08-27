import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
  
  const RatingUser =(props) => {
    const history = useHistory();
    const u = props.match.params.id;
    const [textBased , setTextBased] = useState({question:'', choices:[]})
  const [Bg, setBg]=useState({bgcolor:'',textcolor:'',opacity:1})
    useEffect(async () => {
      var result = await axios.get(`https://targetsynergy-backend.herokuapp.com/RT/${u}`)
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
    console.log(a)
    

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
      axios.put(`https://targetsynergy-backend.herokuapp.com/RT/${u}`, data5)
             .then(res=>{
                console.log(res)
              })
    }
    const uri = `/RT/${u}/results`
  function handleResult(path) {
    history.push(path);
}
    return (
      <div  style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}><h3 fontFamily= "Helvetica">{textBased.question}</h3>
           <form onSubmit={handleClick} className={classes.root} noValidate autoComplete="off">
      
{Answers.map((x, i) => {
 
    return(
        <div style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '95%', margin: '2%' }}>
      
          <h5>{x}</h5>
     
          <Rating
          value={value[i]}
          onChange={handleSliderChange(i)}
          precision={0.5}
          
            
          
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
      <Button
        style={{ width: "20%",background:"#cc0000", color:"white"}}
        className={classes.button}
        variant="contained"
        onClick={() => {handleResult(`${uri}`)}}
        size="large"
       >View Result
      </Button>
      </div>
  
       
       
       </form>
      </div>
      
    );
  }
  export default RatingUser;