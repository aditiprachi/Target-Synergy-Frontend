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
  const [Background, setBackground]=useState({
    bgcolor: 'white',
    textcolor: 'black',
    opacity: 100,
  })
  const url =props.match.params.id;
  const [textBased , setTextBased] = useState({question:'', choices:[]})
    useEffect(async () => {
      var result = await axios.get(`https://targetsynergy-backend.herokuapp.com/RT/${url}`)
      setTextBased({
        question: result.data.question,
       choices: result.data.choices
        
      })
      console.log(result.data.bg)
      const update={...Background, 
        bgcolor: result.data.bg.bgColor,
         textcolor: result.data.bg.textColor,
         opacity: (result.data.bg.opacity/10)*0.1
      }
      setBackground(update)
    },[])
    console.log(Background.opacity)
    return (
      <div>
         <div style={{
          backgroundColor: Background.bgcolor,
          opacity: Background.opacity,
          color: Background.textcolor,
          width: '100%',
          height:'100%'}}>
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
      </div>
      </div>
    );
  }
export default RatingResult