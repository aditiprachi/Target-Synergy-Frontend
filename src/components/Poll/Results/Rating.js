import React,{useEffect,useState } from 'react'
import axios from "axios";
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';



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

const RatingResult =(props) => {
  const classes = useStyles();

  const url =props.match.params.id;
  const [textBased , setTextBased] = useState({question:'', choices:[]})
    useEffect(async () => {
      var result = await axios.get(`https://targetsynergy-backend.herokuapp.com/RT/${url}`)
      setTextBased({
        question: result.data.question,
       choices: result.data.choices
        
      })
    },[])
    
    return (
      <div  style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%',paddingTop:"5%"}}  className={classes.root}><h1 fontFamily= "Helvetica">{textBased.question}</h1>
           
      
{textBased.choices.map((x, i) => {
 
    return(
        <div style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      
          <h3>{x.option}</h3>
     
          <Rating
          value={x.votes}
         readOnly
          precision={0.25}
          
            
          
        />
       
          
</div>

           

        );
      })}
      </div>
    );
  }
export default RatingResult